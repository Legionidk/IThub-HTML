# Анимации в HTML/CSS

Анимации в `HTML` создаются с помощью тега `@keyframes` в `CSS`.
Внутри прописываются параметры анимации, используя проценты или `from/to`:

```
@keyframes myAnimation {
    from {
        background-color: red;
    }
    50% {
        background-color: black;
    }
    to {
        background-color: yellow;
    }
}
```

# Применение анимации к HTML тегам

После прописывания анимации ее необходимо прикрепить к объекту, который нужно анимировать:

```
.animated-box {
    animation-name: myAnimation;
}
```

# Доступные параметры анимируемого тега

-   `animation-duration [3s, 500ms]` - длительность анимации
-   `animation-timing-function [ease, linear, cubic-bezier]` - кривая анимации
-   `animation-delay [2s, -2s]` - задержка перед проигрыванием анимации
    -   при отрицательном значении анимация проиграется так, как будто уже прошло N количество секунд с ее началаП
-   `animation-iteration-count [1, infinite]` - количество повторов анимации
-   `animation-direction [normal, reverse, alternate, alternate-reverse]` - направление проигрывания анимации (с начала в конец, с конца в начало)
-   `animation-fill-mode [forwards, backwards, both]` - задание стилей перед проигрыванием анимации
-   `animation-play-state` - позволяет ставить анимацию на паузу
