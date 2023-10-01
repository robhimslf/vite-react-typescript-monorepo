import type { FC } from 'react';
import './index.css';

/**
 * Properties for rendering a button component.
 */
export interface IButtonProps {

    /**
     * Label text of the button.
     */
    label: string;

    /**
     * Callback fired when the button is clicked.
     */
    onClick(): void;
}

/**
 * Renders a simple button component.
 * 
 * @param {IButtonProps} param0 
 */
export const Button: FC<IButtonProps> = ({ label, onClick }) => (
    <button type="button" onClick={ onClick }>
        { label }
    </button>
);
