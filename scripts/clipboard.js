if (navigator.clipboard) {
    document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'Copier';
        $clipboardEl.parentNode.append($button);
      });
    console.log("Support du presse papier")
  } else {
    console.warn("Pas de support")
  }