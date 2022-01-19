
# Scroller horizontal

![version](https://img.shields.io/github/manifest-json/v/Natjo/scrollerHorizontal)  

Element scrollable horizontally and swipable on non touchable devices
## Usage

### html
#### With list
```html
<div class="scrollerHorizontal pushs">
    <ul>
        <li>1 <a href="">link</a></li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>	
    </ul>
</div>
```
#### With content
```html
<div class="scrollerHorizontal content">
	<div class="text">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non enim quibusdam dignissimos, reiciendis libero ab vel sapiente adipisci quod dolore suscipit ut. Ipsam numquam magni laborum quibusdam voluptates veniam vitae aliquam praesentium, cumque dolorum mollitia excepturi similique voluptas rem! Quibusdam illo reprehenderit, expedita magnam odit minima, sint tempora officia provident quia, quam dolorum molestias? Quisquam, rem dolorem iure distinctio quidem.
	</div>
</div>
```

### javascript
```javascript
import scrollerHorizontal from '../../modules/scrollerHorizontal/scrollerHorizontal.js';
const pushs = document.querySelector('.pushs');
scrollerHorizontal(pushs);
```


## Demo
[See codepen demo](https://codepen.io/natjo/pen/ZEXyXWK)
