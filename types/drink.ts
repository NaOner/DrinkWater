
export const DRINK_TYPE_ENUM = {
    Water: "Water",
    Tea: "Tea",
    Coffee: "Coffee",
} as const;

export type DrinkType = (typeof DRINK_TYPE_ENUM)[keyof typeof DRINK_TYPE_ENUM];

export interface DrinkDTO {
    type: DrinkType;
    volume: number;
}

export interface DrinkRecord extends DrinkDTO{
    date: Date;
}

