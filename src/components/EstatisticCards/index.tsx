import type { IEstatistics } from "./interfaces"


export const Estatistcs = ({ contagem, max, media, min, soma }: IEstatistics) => {

    return (
        <div>
            Media:
            {
                media
            }
            Min:
            {
                min
            }
            Soma:
            {
                soma
            }
            Contagem:
            {
                contagem
            }
            max
            {max}
            
        </div>
    )
}