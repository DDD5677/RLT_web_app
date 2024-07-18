import { ref } from "vue";
import { defineStore } from "pinia";
import type { BoxType, ItemType } from "@/types";

export const useInventarStore = defineStore("inventar", () => {
   let Boxes = ref<BoxType[]>([
      {
         id: "box-1",
         items: [
            {
               id: "item-1",
               image: "green-item.svg",
               name: "Green",
               amount: 4,
            },
         ],
      },
      {
         id: "box-2",
         items: [
            {
               id: "item-2",
               image: "brown-item.svg",
               name: "Green",
               amount: 5,
            },
         ],
      },
      {
         id: "box-3",
         items: [
            {
               id: "item-3",
               image: "blue-item.svg",
               name: "Green",
               amount: 5,
            },
         ],
      },
      {
         id: "box-4",
         items: [],
      },
      {
         id: "box-5",
         items: [],
      },
      {
         id: "box-6",
         items: [],
      },
      {
         id: "box-7",
         items: [],
      },
      {
         id: "box-8",
         items: [],
      },
      {
         id: "box-9",
         items: [],
      },
      {
         id: "box-10",
         items: [],
      },
      {
         id: "box-11",
         items: [],
      },
      {
         id: "box-12",
         items: [],
      },
      {
         id: "box-13",
         items: [],
      },
      {
         id: "box-14",
         items: [],
      },
      {
         id: "box-15",
         items: [],
      },
      {
         id: "box-16",
         items: [],
      },
      {
         id: "box-17",
         items: [],
      },
      {
         id: "box-18",
         items: [],
      },
      {
         id: "box-19",
         items: [],
      },
      {
         id: "box-20",
         items: [],
      },
      {
         id: "box-21",
         items: [],
      },
      {
         id: "box-22",
         items: [],
      },
      {
         id: "box-23",
         items: [],
      },
      {
         id: "box-24",
         items: [],
      },
      {
         id: "box-25",
         items: [],
      },
   ]);
   const getBoxes = () => {
      const boxes = localStorage.getItem("boxes");
      if (boxes) {
         Boxes.value = JSON.parse(boxes);
      }
   };

   const removeItem = (itemId: string, boxId: string) => {
      Boxes.value = Boxes.value.map((box: BoxType) => {
         if (box.id === boxId) {
            box.items = box.items.filter(
               (item: ItemType) => item.id !== itemId
            );
         }
         return box;
      });
      localStorage.setItem("boxes", JSON.stringify(Boxes.value));
   };

   const addItem = (item: ItemType, boxId: string) => {
      Boxes.value = Boxes.value.map((box: BoxType) => {
         if (box.id === boxId) {
            box.items.push(item);
         }
         return box;
      });
   };

   const deleteItem = (itemId: string, boxId: string, quantity: string) => {
      if (!quantity) return;
      Boxes.value = Boxes.value.map((box: BoxType) => {
         if (box.id === boxId) {
            const exist = box.items.find((item) => item.id === itemId);
            if (exist) {
               if (exist.amount - +quantity > 0) {
                  exist.amount -= +quantity;
               } else {
                  box.items = box.items.filter(
                     (item: ItemType) => item.id !== itemId
                  );
               }
            }
         }
         return box;
      });
      localStorage.setItem("boxes", JSON.stringify(Boxes.value));
   };
   return { Boxes, removeItem, addItem, getBoxes, deleteItem };
});
