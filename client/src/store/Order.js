import { makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from 'uuid';
import { user } from './User'; 

class Order {
    orders = []
    constructor(){
        makeAutoObservable(this)
    }
    newOrder (employeeId, nrPlace, employeeName) {
        const newOrder = {
            id: uuidv4(),
            employeeId,
            nrPlace,
            employeeName,
            orderList: [],
            price: 0
        }
        this.orders.push(newOrder)
    }
    removeOrder (id) {
        this.orders = this.orders.filter(order => order.id !== id )
    }
    addToOrderList (orderId, { title, price, pk_course_id, count }) {
        const idx = this.orders.findIndex(({ id }) => id === orderId);
        const candidate = this.orders[idx].orderList.findIndex((course) => course.pk_course_id === pk_course_id )
        this.orders[idx].price = +this.orders[idx].price + (price * count);
        if(candidate !== -1){
            this.orders[idx].orderList[candidate].count = +this.orders[idx].orderList[candidate].count + count
        }
        else{
            const course = {
                title,
                price,
                pk_course_id,
                count
            } 
            this.orders[idx].orderList.push(course)
        }  
    }
    removeFromOrderList (orderId, courseId) {
        const idx = this.orders.findIndex(({ id }) => id === orderId);
        const idxCourse = this.orders[idx].orderList.findIndex(({pk_course_id}) => pk_course_id === courseId)
        this.orders[idx].price = +this.orders[idx].price - (+this.orders[idx].orderList[idxCourse].price * +this.orders[idx].orderList[idxCourse].count);
        this.orders[idx].orderList = this.orders[idx].orderList.filter(({pk_course_id}) => pk_course_id !== courseId )
    }
    payOrder (orderId) {
        // Готую дані для запиту на сервер 
        const idx = this.orders.findIndex(({ id }) => id === orderId);
        const list = this.orders[idx].orderList.map(course => course.title);
        const orderForPay = {
            id: this.orders[idx].id,
            placeN: this.orders[idx].nrPlace,
            list,
            price: this.orders[idx].price,
            status: "active",
            waiter: this.orders[idx].employeeId
        }
        // Запит на додання нового замовлення в бл
        fetch('/orders/add', {
            method: "POST",
            body: JSON.stringify(orderForPay),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Employee ${user.user.token}`
            }
        })
        .then(() => {
            // Як тільки запит додано відсилаємо запит про оплату
            fetch('/orders/pay',{
                method: "POST",
                body: JSON.stringify({orderId}),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Employee ${user.user.token}`
                }
            })
            // Після оплати видаляємо замовлення зі стору
            .then(() => this.removeOrder(orderId) )
        })
    }
}

export const orders = new Order();