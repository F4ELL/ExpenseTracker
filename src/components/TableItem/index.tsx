import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dateFilter'
import { TItem } from '../../types/Item'
import * as C from './styles'

type TProps = {
    item: TItem
}

export const TableItem = ({ item }: TProps) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category categoryColor={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>
                {item.title}
            </C.TableColumn>
            <C.TableColumn>
                <C.Value valueColor={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value></C.TableColumn>
        </C.TableLine>
    )
}