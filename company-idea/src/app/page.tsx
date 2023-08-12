"use client";
import IItem from '@/interface/items.interface';
import { useRef, useState } from 'react';
import ItemCard from '@/components/items.card';
import { useQuery } from 'react-query';
import { Skeleton } from 'primereact/skeleton';
import { useRouter } from 'next/navigation';

import { SEARCH } from '../icons/icon.enum';

import { Paginator } from 'primereact/paginator';

export default function Home() {

  const first = useRef<number>(0);
  const rows = useRef<number>(30);
  const filter = useRef<string>("");

  const skeleton = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,29]

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      const response = await fetch('/api/skin?offset=' + first.current + '&limit=' + rows.current + "&filter="+filter.current);
      console.log("Fetching data...");
      const resData = await response.json();

      const data: Array<IItem> = resData;
      setIsLoading(false);
      return data;
    } catch (error: Error | any) {      //muszáj így megadni, mert különben hibát dob
      console.error(error);
      return error;
    }
  };

  const items = useQuery('items', fetchData);

  const route = useRouter();

  function onPageChange(event: any) {
    first.current = event.first;
    console.log(first.current)
    items.refetch();
    setIsLoading(true);
  }

  const SearchBar = (
    <div className={"flex gap-1"}>
          <div className="flex">
              <span className="hover:bg-gray-700 cursor-pointer inline-flex items-center px-3 text-sm text-white bg-gray-600 border border-r-0 border-gray-700 rounded-l-full" onClick={() => onPageChange({first: 1})}>
                  <SEARCH></SEARCH>
              </span>
              <input type="search" id="website-admin" className="text-white rounded-none rounded-r-full bg-gray-700 border border-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Search" 
                onChange={(e) => {filter.current = e.target.value;}}
              />
          </div>
      </div>
  )

  return (
    <main className="flex min-h-screen flex-col items-center p-16 gap-6">
      {
        isLoading ? <div>Loading...</div> :
          <Paginator leftContent={SearchBar} first={first.current} rows={rows.current} totalRecords={items.isLoading ? '?' : items.data.total} onPageChange={onPageChange}
            template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
      }
      <div className='grid gap-3 grid-cols-6'>
        {
          items.isLoading || isLoading || !items.data.items ?

            skeleton.map((item: number, index: number) => {
              return (
                <Skeleton className="mb-2" width='18rem' height='14rem' key={index}></Skeleton>
              )
            })
            :
            items.data.items.map((item: IItem, index: number) => {
              return (
                <ItemCard key={index} name={item.name} price={item.price} rarity_color={item.rarity_color} icon_url={"https://steamcommunity-a.akamaihd.net/economy/image/"  + item.icon_url + "/300x300/"} currency='€' onClick={() => { route.push("/skin/"+item.name); }}></ItemCard>
              )
            })
        }

      </div>
    </main>
  )
}