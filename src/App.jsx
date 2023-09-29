import { Header } from './Components/Header';
import { Post } from './post';

import './styles.css';

export function App() {
    return (
        <div>
            <Header />

            <Post
                author="Renan"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, 
                minus? Fugit vitae dolorum autem repellat itaque sed aliquam quos saepe, 
                architecto perferendis molestias qui consequuntur nobis illum dicta facilis ea."
            />

            <Post author="Marinho" content="Um novo post muito legal" />
        </div>
    );
}