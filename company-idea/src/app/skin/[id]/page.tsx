"use client";
import IItem from "@/interface/items.interface";
import ItemCard from "../../../components/items.card";
import { useQuery } from "react-query";
import { Button } from "primereact/button";
import IPrice from "@/interface/price.interface";
import { useRouter } from "next/navigation";

export default function Skin({ params }: { params: { id: string } }) {

    async function fetchData() {
        try {
            const response = await fetch('/api/one?id=' + params.id);
            console.log("Fetching data...");
            const resData = await response.json();

            const data: IItem = resData;
            return data;
        } catch (error: Error | any) {      //muszáj így megadni, mert különben hibát dob
            console.error(error);
            return error;
        }
    };

    const items = useQuery('items', fetchData);
    
    const route = useRouter();


    function getPrice(item: any): any{
        return  {"7_days": {lowest_price: item.lowest_price, median: item.median_price, highest_price: item.highest_price}};
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-16 gap-6">
            <Button severity="warning" onClick={()=>{route.push("/")}}>Back</Button>
            {items.isLoading ? <div>Loading...</div> : 
            <ItemCard name={decodeURIComponent(params.id)} price={getPrice(items.data)} rarity_color={items.data.rarity_color} icon_url={items.data.icon} currency='€' onClick={() => { }}></ItemCard>
            }

        </main>
    );
}