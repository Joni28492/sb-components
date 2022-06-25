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
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
    * color personalizado de la fuente
    */
    fontColor?: string;

}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor
}: MyLabelProps) => {
    return (//size  son clases de css
        <span
            style={{ color: fontColor }}
            className={`label ${size} text-${color}`}>
            {(allCaps) ? label.toUpperCase() : label}
        </span>
    )
}
