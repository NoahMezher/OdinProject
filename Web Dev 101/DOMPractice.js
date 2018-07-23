const container = document.querySelector('#container');

const red_paragraph = document.createElement('p');
red_paragraph.classList.add('red_paragraph');
red_paragraph.textContent = 'Hey I\'m red!';
red_paragraph.style.color = 'red';

const blue_h3 = document.createElement('h3');
blue_h3.classList.add('blue_h3');
blue_h3.textContent = 'I\'m a blue h3!';
blue_h3.style.color = 'blue';

const div_h1_child = document.createElement('h1');
div_h1_child.textContent = 'I\'m in a div';

const div_p_child = document.createElement('p');
div_p_child.textContent = 'ME TOO!';

const black_div = document.createElement('div');
black_div.style.borderStyle = 'solid';
black_div.style.borderColor = 'black';
black_div.style.backgroundColor = 'pink';
black_div.appendChild(div_h1_child);
black_div.appendChild(div_p_child);

container.appendChild(red_paragraph);
container.appendChild(blue_h3);
container.appendChild(black_div);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
       alert(button.id);
   });
});