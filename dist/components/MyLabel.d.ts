/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
   * Este es el mensaje de la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Convierte a Mayus
    */
    allCaps?: boolean;
    /**
  * Este es el color
  */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * color personalizado de la fuente
    */
    fontColor?: string;
    /**
    * color personalizado del fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
