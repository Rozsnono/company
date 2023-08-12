import IPrice from "./price.interface";

export default interface IItem {
    classid?: string;
    exterior?: string;
    first_sale_date?: string;
    icon_url?: string;
    icon_url_large?: string;
    marketable?: number;
    name?: string;
    gun_type?: string;
    rarity?: string;
    rarity_color?: string;
    tradable?: number;
    type?: string;
    weapon_type?: string;
    price?: 
    {
        "7_days"?: IPrice;
        "30_days"?: IPrice;
        "all_time"?: IPrice;
    } | null;
}