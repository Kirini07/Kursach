import { CategoryList } from "./CategoryList";
import { render } from "@testing-library/react";

describe("App should be contain:", () => {
  test('Should be contain text "Categories"', () => {
    const { getByText } = render(<CategoryList />);
    const category = getByText(/Categories/gim);
    expect(category).toBeTruthy();
  });
  test('Should be contain category item "Гарячі страви"', () => {
    const { queryByText } = render(<CategoryList />);
    const categoryItem = queryByText(/Гарячі страви/gim);
    expect(categoryItem).toBeTruthy();
  });
  test('Should be contain category item "Холодні страви"', () => {
    const { queryByText } = render(<CategoryList />);
    const categoryItem = queryByText(/Холодні страви/gim);
    expect(categoryItem).toBeTruthy();
  });
  test('Should be contain category item "Перші страви"', () => {
    const { queryByText } = render(<CategoryList />);
    const categoryItem = queryByText(/Перші страви/gim);
    expect(categoryItem).toBeTruthy();
  });
  test('Should be contain category item "Салати"', () => {
    const { queryByText } = render(<CategoryList />);
    const categoryItem = queryByText(/Салати/gim);
    expect(categoryItem).toBeTruthy();
  });
  test('Should be contain category item "Напої"', () => {
    const { queryByText } = render(<CategoryList />);
    const categoryItem = queryByText(/Напої/gim);
    expect(categoryItem).toBeTruthy();
  });
});
