1. Toggle
   useState훅을 활용하여 메뉴가 클릭될때 클릭된곳이 활성화 되게 구현하였다.
   처음에는 "기본","상세"에 따른 handler함수를 2가지를 만들었으나 동일한 기능을 한다고 판단하여 menu인자를 주어 한가지의 함수로 합쳐 최적화를 했다.

2. Tab
   감자를 초기값으로 두고 클릭시 각 Tab마다 Id를 부여하여 그에맞게 색상이 변하도록 구현 했다.
   click 하기 전후 관련 CSS는 tailwind의 Apply기능을 사용하여 유지보수가 편리하도록 했다.

3. Slider
   slider에서 드래그를통한 값 변경시 onChange가 발동되고 그 값을 빼내어 result에 삽입해 줌으로서 값을 표현했다.

4. Input
   input의 type을 활용해 email과 password를 구분하여 구현하였다.

5. Dropdown
   메뉴를 click시 useState내 isActive 변수를 변경하게 하여 창이 뜨게 하였다. 이후 옵션중 클릭했을시 클릭된 값을 innerHTML을 통해 주입해주어 옵션창에 주입하도록 하였고, isActive를 변경하여 창을 닫게 구현했다.
