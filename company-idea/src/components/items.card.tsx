import Image from 'next/image'
import IItem from "@/interface/items.interface";
import { useEffect, useState } from 'react';

export default function ItemsCard(props: IItem & { currency: string, onClick: () => void }) {


    return (
        <main onClick={props.onClick} className={"border-2 rounded-xl cursor-pointer"} style={{ borderColor: ( props.name?.includes('StatTrak') ? ("#CF5E2D") : ("#" + props.rarity_color) ) }}>
            <div className="flex flex-col items-center justify-between p-4 text-center gap-3">
                <Image src={!props.icon_url ? "" : props.icon_url} alt={props.name!} width={128} height={128} />
                <div>{props.name}</div>
                <div className="flex flex-row items-center justify-between">
                    {props.price?.["7_days"]?.lowest_price == null ? "--- " :
                        props.price?.["7_days"]?.lowest_price + "€ - " + props.price?.["7_days"]?.highest_price + props.currency}
                </div>
            </div>
        </main>
    );
}