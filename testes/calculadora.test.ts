import sum from "../models/calculadora";

test("should sum", () => {
    const result = sum(3, 5);
    expect(result).toBe(8)
});

test("should sum 'banana' + 100 and return error", () => {
    const result = sum("banana", 100);
    expect(result).toBe("Error")
});

