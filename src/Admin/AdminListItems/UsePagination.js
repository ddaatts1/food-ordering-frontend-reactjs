
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import "./UsePagination.css"

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

export default function UsePagination(props) {
    const { items } = usePagination({
        count: props.totalPage,
    });

    return (
        <nav className="pagination">
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button
                                type="button"
                                style={{
                                    fontWeight: selected ? 'bold' : undefined,
                                }}
                                {...item}
                                onClick={props.onPageChange(page)}
                            >
                                {console.log("page: ",page)}
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button  type="button" {...item}>
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
}