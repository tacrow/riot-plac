<app>
  <header></header>
  <main class="l-container">
    <div class="l-main">
      <app-contents></app-contents>
    </div>
    <div class="l-side">
      <app-side></app-side>
    </div>
  </main>
  <footer></footer>

  <script>
    import header from './header';
    import appcontents from './app-contents';
    import appside from './app-side';
    import footer from './footer';

    this.on('mount', () => {
      riot.mount('header', { title: 'riot-app' });
      riot.mount('appcontents');
      riot.mount('appside');
      riot.mount('footer');
    });
  </script>
</app>