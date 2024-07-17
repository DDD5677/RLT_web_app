export type ItemType = {
   id: string;
   image: string;
   name: string;
   amount: number;
};

export type BoxType = {
   id: string;
   items: ItemType[];
};
