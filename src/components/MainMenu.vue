<template>
  <section id="s-welcome" class="scrolling">

    <div id="welcome-splash">
      <div class="section">

  <img class="wordmark" src="static/images/wordmarkmini.png" alt="Secret Hitler">

    <div class="section">
      <h3 id="voice-unsupported" style="display:none;">Note: It looks like your browser does not yet support the web standard for voice chat. If you'd like this functionality, please try a browser such as <a href="https://www.google.com/chrome" target="_blank">Google Chrome</a> to play instead.</h3>
      <button id="start-playing" class="large">Play</button>
    </div>
  <p></p>
        <p>
        <h2>Secret Hitler is a social deduction game for 5–10 people about finding and stopping the Secret Hitler.</h2>
        <h2>The majority of players are liberals. If they can learn to trust each other, they have enough votes to control the table and win the game. But some players are fascists. They will say whatever it takes to get elected, enact their agenda, and blame others for the fallout. The liberals must work together to discover the truth before the fascists install their cold-blooded leader and win the game.</h2>
        </p>
      </div>

      <div class="section">
        <a href="http://secrethitler.com/assets/Secret_Hitler_Rules.pdf" target="_blank">Download the rules</a>
      </div>

      <div class="section">
        <p class="detail">Secret Hitler · © 2016 Goat, Wolf, &amp; Cabbage · CC SA-BY-NC 4.0
        <br>secrethitler.games · Paul Dolman-Darrall (RoughJustice) · Free to play community</p>
      </div>

      <hr>
    </div>

    <div id="welcome-signin" style="display:none;">
      <img class="wordmark" src="/images/wordmarkmini.png" alt="Secret Hitler">	
      <div id="s-signin-email" class="sd-signin">
        <form id="signin-start-form">
          <h2>Please enter your email to play:</h2>
          <input class="full input-signin" id="i-signin-email" type="email" placeholder="example@email.com" maxlength="254" /> <div class="input-error mini">Invalid email, please try again</div>
          <button type="submit" class="large">submit</button>
        </form>
        A valid email is required to sign back in later
  <!-- ••• GUEST ACCESS	<p>Alternatively, use a guest account to try it out:</p>
        <button id="guest-signin" class="large">sign in as guest</button> .  -->
      </div>
      <div id="s-signin-passkey" class="sd-signin">
        <form id="signin-passkey-form">
          <h2>Welcome back, <span class="signin-email-address">a@a.a</span>!</h2>
          <h3 class="faint">Wrong email? <button class="signin-restart">try again</button></h3>

          <input class="full input-signin" id="i-signin-passkey" placeholder="6-digit passkey" maxlength="6" autocomplete="none" /> <div class="input-error mini">Passkey must be exactly 6 digits (0-9)</div>
          <button type="submit" class="large">submit</button>
          <h3>Your passkey has been emailed to you. Please enter it to complete your sign in.</h3>
        </form>
      </div>
      <div id="s-signin-username" class="sd-signin">
        <h2>Welcome, <span class="signin-email-address">a@a.a</span>!</h2>
        <h3 class="faint">Wrong email? <button class="signin-restart">try again</button></h3>
        <p class="detail">(take care, a valid email is required to sign back in later)</p>

        <input class="full input-signin" id="i-signin-username" placeholder="username" maxlength="12" /> <div class="input-error mini"></div>
        <h3 class="faint">Provide 4 - 12 letters, numbers, and up to one space</h3>
      </div>
      <br>
      <div class="section">
        <br>
        <p class="detail">Secret Hitler · © 2016 Goat, Wolf, &amp; Cabbage · CC SA-BY-NC 4.0
        <br>secrethitler.games · Paul Dolman-Darrall (RoughJustice) · Free to play community</p>
      </div>  
    </div>
  </section>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#s-welcome {
  text-align: center;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

#s-welcome input {
  font-family: inherit;
  text-align: center;
  font-size: 2em;
  font-weight: 300;
  padding: 8px 4px;
  width: 480px;
  max-width: 100%;
}

#s-welcome h2 {
  font-weight: 400;
  font-size: 1.5em;
}

#s-welcome h3 {
  font-weight: 300;
  font-size: 1.2em;
}

/* SPLASH */

#welcome-splash {
  margin: auto;
  margin-bottom: 64px;
  max-width: 800px;
}

#welcome-splash h1 {
  font-weight: 200;
}

#welcome-splash hr {
  margin: 48px 0;
}

#welcome-splash .section {
  padding: 0 16px;
}

.wordmark {
  margin: auto;
  max-width: 100%;
}

#voice-unsupported {
  margin-bottom: 40px;
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  width: inherit;
  height: inherit;
  background-color: #eaeae5;
  font-family: system-font, -webkit-system-font, 'Helvetica Neue', Helvetica, sans-serif;

  font-weight: 300;
  color: #393734;
}

a {
  color: #9C0701;
  text-decoration: none;
}
a:hover {
  color: #E3644F;
  text-decoration: underline;
}

.clear {
  clear: both;
  margin-left: 1px;
}

.left, .left > * {
  float: left;
  text-align: left;
}

.right, .right > * {
  float: right;
  text-align: right;
}

h1 {
  font-size: 3em;
}

section {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.faint {
  color: #666;
}

/* FORMS */

button.large {
  height: 44px;
  width: 480px;
  max-width: 100%;
  margin: 8px 0;

  font-size: 1.3em;
  color: #393734;
}

input {
  font-family: inherit;
}

textarea {
  box-sizing: border-box;
  display: block;

  width: 420px;
  height: 128px;
  max-width: 100%;

  margin: 12px auto;
  font-size: 1em;
}

select {
  font-size: 1em;
}
</style>
