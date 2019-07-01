<script>
  import { userConfig } from "./store.js";
  const weights = [45, 35, 25, 15, 10, 5, 2.5, 1.25];

  let result = undefined;
  let resultRemainingWeight = undefined;

  let modalClass = "modal";

  function calculate() {
    if ($userConfig.targetWeight) {
      let remainingWeight = $userConfig.targetWeight - $userConfig.barWeight;
      let currentPlateIndex = 0;
      let currentNumPlates = $userConfig.numPlates.slice();
      let usedPlates = {};

      while (remainingWeight > 0 && currentPlateIndex < weights.length) {
        if (currentNumPlates[currentPlateIndex] >= 2) {
          const currentPlateWeight = weights[currentPlateIndex] * 2;
          if (remainingWeight >= currentPlateWeight) {
            remainingWeight = remainingWeight - currentPlateWeight;
            currentNumPlates[currentPlateIndex] =
              currentNumPlates[currentPlateIndex] - 2;

            if (usedPlates[weights[currentPlateIndex]]) {
              usedPlates[weights[currentPlateIndex]] =
                usedPlates[weights[currentPlateIndex]] + 2;
            } else {
              usedPlates[weights[currentPlateIndex]] = 2;
            }
          } else {
            currentPlateIndex++;
          }
        } else {
          currentPlateIndex++;
        }
      }

      result = usedPlates;
      resultRemainingWeight = remainingWeight;
      modalClass = "modal is-active";
    }
  }

  function closeModal() {
    modalClass = "modal";
  }
</script>

<style>
  .modal-content .box > :not(:last-child) {
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>platecalc</title>
</svelte:head>

<div class="container">
  <h1 class="title">
    platecalc.app
    <svg
      height="100px"
      width="100px"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve">
      <g>
        <path
          fill="none"
          d="M26.87,42.24c0-0.407-0.332-0.739-0.739-0.739h-1.646c-0.407,0-0.739,0.332-0.739,0.739V57.76
          c0,0.407,0.332,0.739,0.739,0.739h1.646c0.407,0,0.739-0.331,0.739-0.739v-4.586v-6.702V42.24z" />
        <path
          fill="none"
          d="M21.898,41.501h-1.646c-0.407,0-0.739,0.332-0.739,0.739v1.94V55.82v1.94c0,0.407,0.332,0.739,0.739,0.739
          h1.646c0.407,0,0.739-0.331,0.739-0.739V42.24C22.637,41.832,22.306,41.501,21.898,41.501z" />
        <polygon
          fill="none"
          points="28.281,51.764 28.281,51.763 28.281,48.237 28.281,48.236
          28.281,48.235 28.281,47.027 27.979,47.027 27.979,52.62 28.281,52.62
          28.281,51.765 " />
        <path
          fill="none"
          d="M7.318,48.791c-0.667,0-1.209,0.543-1.209,1.209c0,0.667,0.543,1.209,1.209,1.209h4.737v-2.418H7.318z" />
        <rect x="29.39" y="48.791" fill="none" width="41.573" height="2.418" />
        <path
          fill="none"
          d="M14.814,43.764h-1.235c-0.229,0-0.416,0.186-0.416,0.416V55.82c0,0.229,0.186,0.415,0.416,0.415h1.235
          c0.229,0,0.416-0.186,0.416-0.415V44.18C15.23,43.951,15.043,43.764,14.814,43.764z" />
        <path
          fill="none"
          d="M17.989,43.764h-1.235c-0.229,0-0.416,0.186-0.416,0.416V55.82c0,0.229,0.186,0.415,0.416,0.415h1.235
          c0.229,0,0.416-0.186,0.416-0.415V44.18C18.404,43.951,18.218,43.764,17.989,43.764z" />
        <path
          fill="none"
          d="M92.682,48.791h-4.384v2.418h4.384c0.667,0,1.209-0.542,1.209-1.209
          C93.891,49.333,93.349,48.791,92.682,48.791z" />
        <path
          fill="none"
          d="M87.189,44.18c0-0.229-0.186-0.416-0.416-0.416h-1.235c-0.229,0-0.415,0.186-0.415,0.416V55.82
          c0,0.229,0.186,0.415,0.415,0.415h1.235c0.229,0,0.416-0.186,0.416-0.415V44.18z" />
        <rect x="72.072" y="47.027" fill="none" width="0.302" height="5.593" />
        <path
          fill="none"
          d="M83.599,43.764h-1.235c-0.229,0-0.415,0.186-0.415,0.416V55.82c0,0.229,0.186,0.415,0.415,0.415h1.235
          c0.229,0,0.416-0.186,0.416-0.415V44.18C84.014,43.951,83.828,43.764,83.599,43.764z" />
        <path
          fill="none"
          d="M75.868,41.501h-1.646c-0.407,0-0.739,0.332-0.739,0.739v4.233v6.702v4.586c0,0.407,0.332,0.739,0.739,0.739
          h1.646c0.407,0,0.739-0.331,0.739-0.739V42.24C76.607,41.832,76.275,41.501,75.868,41.501z" />
        <path
          fill="none"
          d="M80.84,42.24c0-0.407-0.332-0.739-0.739-0.739h-1.646c-0.407,0-0.739,0.332-0.739,0.739V57.76
          c0,0.407,0.332,0.739,0.739,0.739h1.646c0.407,0,0.739-0.331,0.739-0.739v-1.94V44.18V42.24z" />
        <path
          d="M92.682,47.682h-4.384V44.18c0-0.841-0.684-1.525-1.525-1.525h-1.235c-0.37,0-0.706,0.138-0.97,0.358
          c-0.264-0.22-0.6-0.358-0.97-0.358h-1.235c-0.145,0-0.283,0.027-0.415,0.065v-0.48c0-1.019-0.829-1.848-1.848-1.848h-1.646
          c-0.504,0-0.96,0.204-1.293,0.531c-0.334-0.328-0.79-0.531-1.293-0.531h-1.646c-1.019,0-1.848,0.829-1.848,1.848v3.678h-0.856
          c-0.306,0-0.554,0.248-0.554,0.554v1.209H29.39v-1.209c0-0.306-0.248-0.554-0.554-0.554h-0.857V42.24
          c0-1.019-0.829-1.848-1.848-1.848h-1.646c-0.504,0-0.96,0.204-1.293,0.531c-0.334-0.328-0.79-0.531-1.293-0.531h-1.646
          c-1.019,0-1.848,0.829-1.848,1.848v0.48c-0.133-0.038-0.271-0.065-0.416-0.065h-1.235c-0.37,0-0.706,0.138-0.97,0.358
          c-0.264-0.22-0.6-0.358-0.97-0.358h-1.235c-0.841,0-1.525,0.684-1.525,1.525v3.502H7.318C6.04,47.682,5,48.722,5,50
          c0,1.278,1.04,2.318,2.318,2.318h4.737v3.502c0,0.841,0.684,1.524,1.525,1.524h1.235c0.37,0,0.706-0.138,0.97-0.358
          c0.264,0.22,0.6,0.358,0.97,0.358h1.235c0.145,0,0.283-0.027,0.416-0.065v0.48c0,1.019,0.829,1.848,1.848,1.848h1.646
          c0.504,0,0.96-0.204,1.293-0.531c0.334,0.328,0.79,0.531,1.293,0.531h1.646c1.019,0,1.848-0.829,1.848-1.848v-4.031h0.857
          c0.306,0,0.554-0.248,0.554-0.554v-0.857h41.573v0.857c0,0.306,0.248,0.554,0.554,0.554h0.856v4.031
          c0,1.019,0.829,1.848,1.848,1.848h1.646c0.504,0,0.96-0.204,1.293-0.531c0.334,0.328,0.79,0.531,1.293,0.531h1.646
          c1.019,0,1.848-0.829,1.848-1.848v-0.48c0.133,0.038,0.271,0.065,0.415,0.065h1.235c0.37,0,0.706-0.138,0.97-0.358
          c0.264,0.22,0.6,0.358,0.97,0.358h1.235c0.841,0,1.525-0.684,1.525-1.524v-3.502h4.384C93.96,52.318,95,51.278,95,50
          C95,48.722,93.96,47.682,92.682,47.682z
          M7.318,51.209c-0.667,0-1.209-0.542-1.209-1.209c0-0.667,0.543-1.209,1.209-1.209h4.737
          v2.418H7.318z
          M14.814,56.236h-1.235c-0.229,0-0.416-0.186-0.416-0.415V44.18c0-0.229,0.186-0.416,0.416-0.416h1.235
          c0.229,0,0.416,0.186,0.416,0.416V55.82C15.23,56.049,15.043,56.236,14.814,56.236z
          M17.989,56.236h-1.235
          c-0.229,0-0.416-0.186-0.416-0.415V44.18c0-0.229,0.186-0.416,0.416-0.416h1.235c0.229,0,0.416,0.186,0.416,0.416V55.82
          C18.404,56.049,18.218,56.236,17.989,56.236z
          M21.898,58.499h-1.646c-0.407,0-0.739-0.331-0.739-0.739v-1.94V44.18v-1.94
          c0-0.407,0.332-0.739,0.739-0.739h1.646c0.407,0,0.739,0.332,0.739,0.739V57.76C22.637,58.168,22.306,58.499,21.898,58.499z
          M26.87,57.76c0,0.407-0.332,0.739-0.739,0.739h-1.646c-0.407,0-0.739-0.331-0.739-0.739V42.24c0-0.407,0.332-0.739,0.739-0.739
          h1.646c0.407,0,0.739,0.332,0.739,0.739v4.233v6.702V57.76z
          M27.979,52.62v-5.593h0.302v1.208c0,0,0,0.001,0,0.001s0,0.001,0,0.001
          v3.526c0,0,0,0.001,0,0.001s0,0.001,0,0.001v0.856H27.979z
          M29.39,51.209v-2.418h41.573v2.418H29.39z M72.072,52.62v-5.593h0.302
          v5.593H72.072z
          M75.868,58.499h-1.646c-0.407,0-0.739-0.331-0.739-0.739v-4.586v-6.702V42.24c0-0.407,0.332-0.739,0.739-0.739
          h1.646c0.407,0,0.739,0.332,0.739,0.739V57.76C76.607,58.168,76.275,58.499,75.868,58.499z
          M80.84,57.76
          c0,0.407-0.332,0.739-0.739,0.739h-1.646c-0.407,0-0.739-0.331-0.739-0.739V42.24c0-0.407,0.332-0.739,0.739-0.739h1.646
          c0.407,0,0.739,0.332,0.739,0.739v1.94V55.82V57.76z
          M83.599,56.236h-1.235c-0.229,0-0.415-0.186-0.415-0.415V44.18
          c0-0.229,0.186-0.416,0.415-0.416h1.235c0.229,0,0.416,0.186,0.416,0.416V55.82C84.014,56.049,83.828,56.236,83.599,56.236z
          M87.189,55.82c0,0.229-0.186,0.415-0.416,0.415h-1.235c-0.229,0-0.415-0.186-0.415-0.415V44.18c0-0.229,0.186-0.416,0.415-0.416
          h1.235c0.229,0,0.416,0.186,0.416,0.416V55.82z
          M92.682,51.209h-4.384v-2.418h4.384c0.667,0,1.209,0.543,1.209,1.209
          C93.891,50.667,93.349,51.209,92.682,51.209z" />
      </g>
    </svg>
  </h1>
  <p class="subtitle">A simple app to help you load your barbell.</p>
  <div class="field">
    <label class="label">Target Weight</label>
    <div class="control">
      <input
        class="input"
        type="number"
        bind:value={$userConfig.targetWeight} />
    </div>
  </div>
  <div class="field">
    <label class="label">Bar Weight (lb)</label>
    <div class="control">
      <input class="input" type="number" bind:value={$userConfig.barWeight} />
    </div>
  </div>
  <div class="columns is-multiline">
    {#each weights as weight, i}
      <div class="column is-6">
        <div class="field">
          <label class="label">{weight}lb Plates</label>
          <div class="control">
            <input
              class="input"
              type="number"
              bind:value={$userConfig.numPlates[i]} />
          </div>
        </div>
      </div>
    {/each}
  </div>
  <button class="button primary is-fullwidth" on:click={calculate}>
    Calculate
  </button>
</div>

<div class={modalClass}>
  <div class="modal-background" on:click={closeModal} />
  <div class="modal-content">
    <div class="box">
      {#if result}
        <div>With the weight of the bar included you need:</div>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Weight</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {#each Object.keys(result) as weight}
              <tr>
                <td>{weight}</td>
                <td>{result[weight]}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <div>There are {resultRemainingWeight} pounds remaining.</div>
      {/if}
    </div>
  </div>
  <button
    class="modal-close is-large"
    aria-label="close"
    on:click={closeModal} />
</div>
