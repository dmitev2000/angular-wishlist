export class WishItem {
  constructor(
    public wishid: number,
    public wishtext: string,
    public iscomplete: boolean = false
  ) {}
}
