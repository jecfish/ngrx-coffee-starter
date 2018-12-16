export interface AppState {
    readonly app: App;
}

export interface App {
    // define state here
    isPageLoading: boolean;
    coffeeList: Coffee[];
    cart: { name: string; quantity: number }[];
}

export interface Coffee {
    name: string;
    price: number;
    recipe: RecipeItem[];
}

export interface RecipeItem {
    name: string;
    quantity: number;
}
