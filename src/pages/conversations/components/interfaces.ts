export interface SideBarProps {
  children: React.ReactNode;
  onClose(): void;
  open: boolean;
  onOpen(): void;
  onAddNew(): void;
}
