import { makeAutoObservable } from "mobx"
import { user } from './User';
class Courses {
    courses = []
    constructor(){
        makeAutoObservable(this)
    }
    fetchCourses(){
        return new Promise((resolve, reject) => {
            fetch('/common/course/all',{
                method: 'GET',
                headers: {
                    Authorization: `Employee ${user.user.token}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.courses = [...json]
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    }
    deleteById(courseId){
        return new Promise((resolve, reject) => {
            fetch('/admin/course/delete',{
                method: 'POST',
                body: JSON.stringify({courseId}),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${user.user.role} ${user.user.token}`
                },
            })
                .then(() => resolve())
                .catch(error => {
                    reject(error.message)
                })
        })
    }
    getByCategoryName(categoryName){
        return this.courses.filter(course => course.category_of_course === categoryName)
    }
}

export const courses = new Courses();