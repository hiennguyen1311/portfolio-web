export interface MenuProps {
  children: React.ReactNode;
  menus: Array<{
    title: string;
    onClick(): void;
  }>;
  onClose(): void;
  open: boolean;
  onOpen(e: React.MouseEvent<HTMLButtonElement>): void;
}
