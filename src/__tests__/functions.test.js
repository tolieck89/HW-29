import { describe, test, expect } from "@jest/globals";
import { ageClassification, weekFn } from "../js/functions.js"; 

const ageExpect = {
    "-3": null,
    "0": null,
    "1": "Дитинство",
    "24": "Дитинство",
    "44": "Молодість",
    "44.01": "Зрілість",
    "65": "Зрілість",
    "65.1": "Старість",
    "75": "Старість",
    "75.01": "Довголіття",
    "90": "Довголіття",
    "90.01": "Рекорд",
    "122": "Рекорд",
    "122.01": null,
    "150": null
};

const days = {
    1: "Понеділок",
    2: "Вівторок",
    3: "Середа",
    4: "Четвер",
    5: "П\'ятниця",
    6: "Субота",
    7: "Неділя", 
    0: "ddd",
    9: "ddd"
};

describe("Testing graduation of ages", () => {
    const valuesArray = Object.entries(ageExpect);

    valuesArray.forEach(([key, value]) => {
        test(`Test of ageClassification with argument: ${key}`, () => {
            expect(ageClassification(key)).toBe(value);
        });
    });
});

describe("Test of days function", () => {
    const valuesArray = Object.entries(days);

    valuesArray.forEach(([key, value]) => {
        if (key < 1 || key > 7 || !Number.isInteger(key)) {
            value = null;
        }

        test(`Test of days with argument: ${key}`, () => {
            expect(weekFn(key)).toBe(value); 
        });
    });
});