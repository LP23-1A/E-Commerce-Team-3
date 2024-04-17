"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface DraftItem {
  id: string;
  count:number;
  productId : string,
  images : [string],
  productName:string,
  price:number,
  description:string,

}

interface DraftContextType {
  draft: DraftItem[];
  addToDraft: (item: DraftItem) => void;
  setDraft: (draft: DraftItem[]) => void;
}

const DraftContext = createContext<DraftContextType>({
  draft: [],
  addToDraft: () => {},
  setDraft: () => {},
});

export const useDraft = () => useContext(DraftContext);

interface DraftProviderProps {
  children: ReactNode;
}

export const DraftProvider = ({ children }: DraftProviderProps) => {
  const [draft, setDraft] = useState<DraftItem[]>([]);

  const addToDraft = (item: DraftItem) => {
    const itemIndex = draft.findIndex(
      (draftItem) => draftItem.id === item.id
    );
    if (itemIndex !== -1) {
      setDraft([...draft, { ...item, count: 1 }]);
    } else {
      setDraft([...draft, { ...item, count: 1 }]);
    }
  };

  return (
    <DraftContext.Provider value={{ draft, addToDraft, setDraft }}>
      {children}
    </DraftContext.Provider>
  );
};
