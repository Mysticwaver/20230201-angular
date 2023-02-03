export interface AuctionItem {
  id: number
  title: string
  imgUrl: string
  description?: string
  price: number
}

export type CreateAuctionItem = Omit<AuctionItem, 'id'>;
