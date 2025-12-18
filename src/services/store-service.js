import foodies from '../foods.json';

let foods = foodies;

export const list = () => Promise.resolve([...foods]);

export const remove = (id) => {
    return new Promise((resolve) => {
        foods = foods.filter((food) => food.id !== id);
        
        resolve();
    }); 
};