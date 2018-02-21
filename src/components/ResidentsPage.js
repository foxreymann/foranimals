import React from 'react';
import Residents from './Residents'


export default () =>
  <div className="residentsPage bg-green">
    <article className="header">
      <h2>Jeśli nie możesz mieć zwierzaka...</h2>
      <h3>Jeśli:</h3>

      <ul className="residents">
        <li>nie możesz przygarnąć bezdomnego kota</li>
        <li>chcesz pomóc konkretnemu kotu</li>
        <li>czujesz się na siłach co miesiąc opłacać na konto Fundacji stałą kwotę na utrzymanie swojego kota</li>
      </ul>

      <p>...to wirtualna adopcja jest właśnie dla ciebie.</p>
    </article>

    <article>
      <p>Minimalny miesięczny koszt utrzymania jednego kota wynosi 40 PLN ale wielkość wpłaty zależy do Ciebie, liczy się każda złotówka.</p>

      <p>Nie pokrywa to wprawdzie ewentualnych kosztów leczenia, badań, zabiegów
      weterynaryjnych, szczepień, ale i tak bardzo by nam to pomogło finansowo
      w naszej działalności.</p>

      <p>Opiekunem wirtualnym może zostać każdy: osoba prywatna, organizacja,
      określona grupa ludzi (np. szkoła, klasa itp.) albo firma. Na naszej
      stronie internetowej, pod opisem zaadoptowanego wirtualnie kota, pojawi
      się wybrana przez opiekuna informacja (imię, nazwisko lub nick).</p>

      <p>Adopcja wirtualna danego kota kończy się wraz ze znalezieniem mu domu
      docelowego. Wtedy możesz zrezygnować z dalszego finansowania lub wybrać
      innego kota, któremu chcesz pomagać.Możesz również w każdej chwili
      zrezygnować z adopcji wirtualnej. Pamiętaj jednak, by zgłosić nam ten
      fakt, bo być może ktoś inny będzie chciał zaadoptować go wirtualnie.</p>

      <h2>Jak zostać wirtualnym opiekunem?</h2>
      <ol>
        <li>Wybierz kota, którego chcesz adoptować.</li>
        <li>Napisz do nas ( <a href='mailto:pini1@foranimals.org.pl'>pini1@foranimals.org.pl</a> ), że chcesz zostać jego wirtualnym opiekunem i podaj, jakie informacje mamy umieścić pod jego opisem.</li>
        <li>Co miesiąc wpłacasz dowolną kwotę  na konto Fundacji podając w tytule przelewu: „adopcja wirtualna, kot, nr (nr kota na stronie adopcyjnej fundacji), oraz okres, którego dotyczy wpłata.  Np: adopcja wirtualna kot nr 132, lipiec-wrzesień 2018</li>
      </ol>

      <p><b>Konto fundacji do wpłat:</b></p>
      <p>
      Fundacja For Animals<br/>
      ul.11 Listopada 4<br/>
      40-387 Katowice
      </p>

      <p>
      Bank PKO BP, konto nr:<br/>
      02 1020 2313 0000 3102 0161 2043
      </p>
    </article>

    <article className="Residents-list-header">
      <h2>Nasi rezydenci :</h2>
    </article>
  <Residents />
</div>
