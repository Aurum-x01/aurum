  // typing effect
  const lines = [
    { html: '<span class="kw">const</span> <span class="fn">aurum</span> = {' , indent: 0 },
    { html: '  stack: [<span class="str">\'html\'</span>, <span class="str">\'css\'</span>, <span class="str">\'js\'</span>, <span class="str">\'node\'</span>],', indent: 0 },
    { html: '  bots: [<span class="str">\'telegram\'</span>, <span class="str">\'discord\'</span>],', indent: 0 },
    { html: '  <span class="fn">build</span>(idea) {', indent: 0 },
    { html: '    <span class="kw">return</span> <span class="str">\'сайт, що працює\'</span>;', indent: 0 },
    { html: '  }', indent: 0 },
    { html: '};', indent: 0 },
    { html: '<span class="cm">// твій код твоє золото</span>', indent: 0 },
  ];

  const el = document.getElementById('typewriter');
  let li = 0;

  function typeLine(){
    if (li >= lines.length){
      const cur = document.createElement('span');
      cur.className = 'cursor-blink';
      el.appendChild(cur);
      return;
    }
    const row = document.createElement('div');
    const num = document.createElement('span');
    num.className = 'ln';
    num.textContent = (li+1);
    row.appendChild(num);
    const content = document.createElement('span');
    row.appendChild(content);
    el.appendChild(row);

    const raw = lines[li].html;
    let i = 0;
    const speed = 14;
    function step(){
      // reveal by tag-safe chunks: just set innerHTML progressively via a hidden parser
      i += 3;
      const shown = raw.slice(0, i);
      content.innerHTML = shown;
      if (i < raw.length){
        setTimeout(step, speed);
      } else {
        content.innerHTML = raw;
        li++;
        setTimeout(typeLine, 120);
      }
    }
    step();
  }
  typeLine();

  // copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'скопійовано';
        setTimeout(() => { btn.textContent = original; }, 1500);
      }).catch(() => {
        btn.textContent = text;
      });
    });
  });