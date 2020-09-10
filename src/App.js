import React from 'react';

import { useState, useEffect } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { MdVolumeUp } from 'react-icons/md';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const tones = {
  a: ['ā','á','ǎ','à','a'],
  e: ['ē','é','ě','è','e'],
  i: ['ī','í','ǐ','ì','i'],
  o: ['ō','ó','ǒ','ò','o'],
  u: ['ū','ú','ǔ','ù','u'],
  v: ['ǖ','ǘ','ǚ','ǜ','ü']
}

const words = [
  'ba01', 'ba11', 'ba21', 'ba31', 'ba41',
  'pa01', 'pa11', 'pa21', 'pa31', 'pa41',
  'ma01', 'ma11', 'ma21', 'ma31', 'ma41',
  'fa01', 'fa11', 'fa21', 'fa31', 'fa41',
  'bo01', 'bo11', 'bo21', 'bo31', 'bo41',
  'po01', 'po11', 'po21', 'po31', 'po41',
  'mo01', 'mo11', 'mo21', 'mo31', 'mo41',
  'fo01', 'fo11', 'fo21', 'fo31', 'fo41',
  'me01', 'me11', 'me21', 'me31', 'me41',
  'bai01', 'bai11', 'bai21', 'bai31', 'bai41',
  'pai01', 'pai11', 'pai21', 'pai31', 'pai41',
  'mai01', 'mai11', 'mai21', 'mai31', 'mai41',
  'bei01', 'bei11', 'bei21', 'bei31', 'bei41',
  'pei01', 'pei11', 'pei21', 'pei31', 'pei41',
  'mei01', 'mei11', 'mei21', 'mei31', 'mei41',
  'fei01', 'fei11', 'fei21', 'fei31', 'fei41',
  'bao01', 'bao11', 'bao21', 'bao31', 'bao41',
  'pao01', 'pao11', 'pao21', 'pao31', 'pao41',
  'mao01', 'mao11', 'mao21', 'mao31', 'mao41',
  'pou01', 'pou11', 'pou21', 'pou31', 'pou41',
  'mou01', 'mou11', 'mou21', 'mou31', 'mou41',
  'fou01', 'fou11', 'fou21', 'fou31', 'fou41',

  'ban01', 'ban11', 'ban21', 'ban31', 'ban41',
  'pan01', 'pan11', 'pan21', 'pan31', 'pan41',
  'man01', 'man11', 'man21', 'man31', 'man41',
  'fan01', 'fan11', 'fan21', 'fan31', 'fan41',

  'ben01', 'ben11', 'ben21', 'ben31', 'ben41',
  'pen01', 'pen11', 'pen21', 'pen31', 'pen41',
  'men01', 'men11', 'men21', 'men31', 'men41',
  'fen01', 'fen11', 'fen21', 'fen31', 'fen41',

  'bang01', 'bang11', 'bang21', 'bang31', 'bang41',
  'pang01', 'pang11', 'pang21', 'pang31', 'pang41',
  'mang01', 'mang11', 'mang21', 'mang31', 'mang41',
  'fang01', 'fang11', 'fang21', 'fang31', 'fang41',

  'beng01', 'beng11', 'beng21', 'beng31', 'beng41',
  'peng01', 'peng11', 'peng21', 'peng31', 'peng41',
  'meng01', 'meng11', 'meng21', 'meng31', 'meng41',
  'feng01', 'feng11', 'feng21', 'feng31', 'feng41',

  'bi01', 'bi11', 'bi21', 'bi31', 'bi41',
  'pi01', 'pi11', 'pi21', 'pi31', 'pi41',
  'mi01', 'mi11', 'mi21', 'mi31', 'mi41',

  'biao02', 'biao12', 'biao22', 'biao32', 'biao42',
  'piao02', 'piao12', 'piao22', 'piao32', 'piao42',
  'miao02', 'miao12', 'miao22', 'miao32', 'miao42',

  'bie02', 'bie12', 'bie22', 'bie32', 'bie42',
  'pie02', 'pie12', 'pie22', 'pie32', 'pie42',
  'mie02', 'mie12', 'mie22', 'mie32', 'mie42',

  'miu02', 'miu12', 'miu22', 'miu32', 'miu42',

  'shou02', 'shou12', 'shou22', 'shou32', 'shou42',
  'zou01', 'zou11', 'zou21', 'zou31', 'zou41'
];

function App() {
  const [conf, setConf] = useState({
    'theme'  : 'dark'
  });

  const [game, setGame] = useState({
    stats: { correct: 0, incorrect: 0 },
    cards: [0, 0, 0, 0, 0],
    disabled: [0, 0, 0, 0, 0],
    tone: 0,
    firstTry: true
  });

  const useMountEffect = (f) => useEffect(f, []);
  useMountEffect(() => newWord());

  function newWord() {
    const e = words[Math.floor(Math.random() * words.length)];
    const w = e.substr(0, e.length-2);
    const c = e.substr(e.length-2);
    const t = c.charAt(0);
    const i = c.charAt(1);
    const l = w.substr(0, i);
    const v = w.charAt(i);
    const r = w.substr(parseInt(i)+1);
    let g = {...game};
    g['cards'] = [l+tones[v][0]+r, l+tones[v][1]+r, l+tones[v][2]+r, l+tones[v][3]+r, l+tones[v][4]+r];
    g['disabled'] = [0, 0, 0, 0, 0];
    g['audiofile'] = '/pinyin-practice/mp3/'+w+(parseInt(t)+1)+'.mp3';
    g['firstTry'] = true;
    g['tone'] = parseInt(t);
    setGame(g);
  }

  function answer(a) {
    if (a === game['tone']) {
      let g = {...game};
      g['stats']['correct'] += 1;
      newWord();
    } else {
      let g = {...game};
      if (g['firstTry']) {
        g['stats']['incorrect'] += 1;
      }
      g['firstTry'] = false;
      g['disabled'][a] = 1;
      setGame(g);
    }
  }

  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 2,
          textTransform: 'none'
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Typography variant="h3" gutterBottom>
              Pinyin Practice
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-12 col-md-9">
            <Button onClick={() => { let p = new Audio(game['audiofile']); p.play() }} variant="outlined" className="w-100 h-100">
              <Typography variant="h1"><MdVolumeUp style={{ marginBottom: '0.1em' }}/></Typography>
            </Button>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex flex-wrap flex-md-nowrap flex-md-column justify-content-center">
              <Button onClick={ (e) => answer(0) } variant="outlined" className="m-2 p-4" disabled={game['disabled'][0] ? true : false}>
                <Typography variant="h4">
                  {game['cards'][0]}
                </Typography>
              </Button>
              <Button onClick={ (e) => answer(1) }variant="outlined" className="m-2 p-4" disabled={game['disabled'][1] ? true : false}>
                <Typography variant="h4">
                  {game['cards'][1]}
                </Typography>
              </Button>
              <Button onClick={ (e) => answer(2) } variant="outlined" className="m-2 p-4" disabled={game['disabled'][2] ? true : false}>
                <Typography variant="h4">
                  {game['cards'][2]}
                </Typography>
              </Button>
              <Button onClick={ (e) => answer(3) } variant="outlined" className="m-2 p-4 h-100" disabled={game['disabled'][3] ? true : false}>
                <Typography variant="h4">
                  {game['cards'][3]}
                </Typography>
              </Button>
              <Button onClick={ (e) => answer(4) } variant="outlined" className="m-2 p-4 h-100" disabled={game['disabled'][4] ? true : false}>
                <Typography variant="h4">
                  {game['cards'][4]}
                </Typography>
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap">
            <Typography variant="button">
              <span style={{ fontSize: '2em', marginRight: '2em', whiteSpace: 'nowrap' }}>Correct { game['stats']['correct'] }</span>
            </Typography>
            <Typography variant="button">
              <span style={{ fontSize: '2em', whiteSpace: 'nowrap' }}>Incorrect { game['stats']['incorrect'] }</span>
            </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
