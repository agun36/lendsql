export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string) => void;
}