<app>
  <header></header>
  <main class="l-contenta">
    <div class="l-main">
      <appContents></appContents>
    </div>
    <div class="l-side">
      <appSide></appSide>
    </div>
  </main>
  <footer></footer>

  <script>
    import header from './header';
    import appContents from './appContents';
    import appSide from './appSide';
    import footer from './footer';

    this.on('mount', () => {
      riot.mount('header', { title: 'riot-app' });
      riot.mount('appContents');
      riot.mount('appSide');
      riot.mount('footer');
    });
  </script>
</app>