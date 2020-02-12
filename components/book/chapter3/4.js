import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {Header} from 'react-navigation-stack';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  CustomHeader,
  book_styles as styles,
  points,
  GreyCard,
  GreenCard,
  ImageCard,
  PinkCard,
} from '../bookcomponents';

export default class Chapter3Part4 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Religious conflicts</Text>
        <Text style={styles.text}>
          {'\n'}After his victory in the Wars of the Roses, Henry VII wanted to
          make sure that England remained peaceful and that his position as king
          was secure. He deliberately strengthened the central administration of
          England and reduced the power of the nobles. He was thrifty and built
          up the monarchy's financial reserves. When he died, his son Henry
          VIII continued the policy of centralising power.{'\n'}
          {'\n'}
          Henry VIII was most famous for breaking away from the Church of Rome
          and marrying six times.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>The six wives of Henry VIII</Text>
        <PinkCard
          bold={'Catherine of Aragon - '}
          text={
            'Catherine was a Spanish princess. She and Henry had a number of children but only one, Mary, survived. When Catherine was too old to give him another child, Henry decided to divorce her, hoping that another wife would give him a son to be his heir.'
          }
        />
        <PinkCard
          bold={'Anne Boleyn - '}
          text={
            'Anne Boleyn was English. She and Henry had one daughter, Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London.'
          }
        />
        <PinkCard
          bold={'Jane Seymour - '}
          text={
            "Henry married Jane after Anne's execution. She gave Henry the son he wanted, Edward, but she died shortly after the birth."
          }
        />
        <PinkCard
          bold={'Anne of Cleves - '}
          text={
            'Anne was a German princess. Henry married her for political reasons but divorced her soon after.'
          }
        />
        <PinkCard
          bold={'Catherine Howard - '}
          text={
            'Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed.'
          }
        />
        <PinkCard
          bold={'Catherine Parr - '}
          text={
            'Catherine was a widow who married Henry late in his life. She survived him and married again but died soon after.'
          }
        />

        <Text style={styles.text}>
          {'\n'}
          To divorce his first wife, Henry needed the approval of the Pope. When
          the Pope refused, Henry established the Church of England. In this new
          Church, the king, not the Pope, would have the power to appoint
          bishops and order how people should worship.
          {'\n'}
        </Text>
        <ImageCard img={'kinghenryviii'} text={'King Henry VII'} />
        <Text style={styles.text}>
          {'\n'}
          At the same time the Reformation was happening across Europe. This was
          a movement against the authority of the Pope and the ideas and
          practices of the Roman Catholic Church. The Protestants formed their
          own churches. They read the Bible in their own languages instead of in
          Latin; they did not pray to saints or at shrines; and they believed
          that a person's own relationship with God was more important than
          submitting to the authority of the Church. Protestant ideas gradually
          gained strength in England, Wales and Scotland during the 16th
          century.
          {'\n'}
          {'\n'}
          In Ireland, however, attempts by the English to impose Protestantism
          (alongside efforts to introduce the English system of laws about the
          inheritance of land) led to rebellion from the Irish chieftains, and
          much brutal fighting followed.{'\n'}
          {'\n'}During the reign of Henry VIII, Wales became formally united
          with England by the Act for the Government of Wales. The Welsh sent
          representatives to the House of Commons and the Welsh legal system was
          reformed.
          {'\n'}
          {'\n'}Henry VIII was succeeded by his son Edward VI, who was strongly
          Protestant. During his reign, the Book of Common Prayer was written to
          be used in the Church of England. A version of this book is still used
          in some churches today. Edward died at the age of 15 after ruling for
          just over six years, and his half-sister Mary became queen. Mary was a
          devout Catholic and persecuted Protestants (for this reason, she
          became known as 'Bloody Mary'). Mary also died after a short reign
          and the next monarch was her half-sister, Elizabeth, the daughter of
          Henry VIII and Anne Boleyn.
          {'\n'}
        </Text>
        <Text style={styles.title}>Queen Elizabeth I {'\n'}</Text>
        <ImageCard img={'queenelizabethi'} text={'Queen Elizabeth I'} />
        <Text style={styles.text}>
          {'\n'}
          Queen Elizabeth I was a Protestant. She re-established the Church of
          England as the official Church in England. Everyone had to attend
          their local church and there were laws about the type of religious
          services and the prayers which could be said, but Elizabeth did not
          ask about people's real beliefs. She succeeded in finding a balance
          between the views of Catholics and the more extreme Protestants. In
          this way, she avoided any serious religious conflict within England.
          Elizabeth became one of the most popular monarchs in English history,
          particularly after 1588, when the English defeated the Spanish Armada
          (a large fleet of ships), which had been sent by Spain to conquer
          England and restore Catholicism.
          {'\n'}
        </Text>
        <Text style={styles.title}>
          The Reformation in Scotland and Mary, Queen of Scots
        </Text>
        <Text style={styles.text}>
          {'\n'}
          Scotland had also been strongly influenced by Protestant ideas. In
          1560, the predominantly Protestant Scottish Parliament abolished the
          authority of the Pope in Scotland and Roman Catholic religious
          services became illegal. A Protestant Church of Scotland with an 
          leadership was established but, unlike in England, this was not a
          state Church.
          {'\n'}
          {'\n'}The queen of Scotland, Mary Stuart (often now called 'Mary,
          Queen of Scots') was a Catholic. She was only a week old when her
          father died and she became queen. Much of her childhood was spent in
          France. When she returned to Scotland, she was the centre of a power
          struggle between different groups. When her husband was murdered, Mary
          was suspected of involvement and fled to England. She gave her throne
          to her Protestant son, James VI of Scotland. Mary was Elizabeth I's
          cousin and hoped that Elizabeth might help her, but Elizabeth
          suspected Mary of wanting to take over the English throne, and kept
          her a prisoner for 20 years. Mary was eventually executed, accused of
          plotting against Elizabeth I.
          {'\n'}
        </Text>
        <Text style={styles.title}>Exploration, poetry and drama{'\n'}</Text>
        <ImageCard img={'thegoldenhind'} text={'The Golden Hind'} />
        <Text style={styles.text}>
          {'\n'}
          The Elizabethan period in England was a time of growing patriotism: a
          feeling of pride in being English. English explorers sought new trade
          routes and tried to expand British trade into the Spanish colonies in
          the Americas. Sir Francis Drake, one of the commanders in the defeat
          of the Spanish Armada, was one of the founders of England's naval
          tradition. His ship, the Golden Hind, was one of the first to sail
          right around ('circumnavigate') the world. In Elizabeth I's
          time, English settlers first began to colonise the eastern coast of
          America. This colonisation, particularly by people who disagreed with
          the religious views of the next two kings, greatly increased in the
          next century.
          {'\n'} {'\n'}
          The Elizabethan period is also remembered for the richness of its
          poetry and drama, especially the plays and poems of William
          Shakespeare. {'\n'}
        </Text>
        <Text style={styles.subtitle}>William Shakespeare (1564 - 1616)</Text>
        <Text style={styles.text}>
          {'\n'}
          Shakespeare was born in Stratford-upon-Avon, England. He was a
          playwright and actor and wrote many poems and plays. His most famous
          plays include A Midsummer Night's Dream, Hamlet, Macbeth and Romeo
          and Juliet. He also dramatised significant events from the past, but
          he did not focus solely on kings and queens. He was one of the first
          to portray ordinary Englishmen and women. Shakespeare had a great
          influence on the English language and invented many words that are
          still common today. Lines from his plays and poems which are often
          still quoted include:{'\n'}
        </Text>
        {points([
          'Once more unto the breach (Henry V)',
          'To be or not to be (Hamlet)',
          'A rose by any other name (Romeo and Juliet)',
          "All the world's a stage (As You Like It)",
          "The darling buds of May (Sonnet 18, Shall I Compare Thee To a Summer's Day).",
        ])}
        <Text style={styles.text}>
          {'\n'}
          Many people regard Shakespeare as the greatest playwright of all time.
          His plays and poems are still performed and studied in Britain and
          other countries today. The Globe Theatre in London is a modern copy of
          the theatres in which his plays were first performed.{'\n'}
        </Text>
        <Text style={styles.title}>James VI and I</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}Elizabeth I never married and so had no children of her own to
          inherit her throne. When she died in 1603 her heir was her cousin
          James VI of Scotland. He became King James I of England, Wales and
          Ireland but Scotland remained a separate country. {'\n'}
        </Text>
        <Text style={styles.subtitle}>The King James Bible</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}One achievement of King James' reign was a new translation of
          the Bible into English. This translation is known as the 'King James
          Version' or the 'Authorised Version'. It was not the first
          English Bible but is a version which continues to be used in many
          Protestant churches today. {'\n'}
        </Text>
        <Text style={styles.title}>Ireland</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}During this period, Ireland was an almost completely Catholic
          country. Henry VII and Henry VIII had extended English control outside
          the Pale and had established English authority over the whole country.
          Henry VIII took the title 'King of Ireland'. English laws were
          introduced and local leaders were expected to follow the instructions
          of the Lord Lieutenants in Dublin.
          {'\n'}
          {'\n'}During the reigns of Elizabeth I and James I, many people in
          Ireland opposed rule by the Protestant government in England. There
          were a number of rebellions. The English government encouraged
          Scottish and English Protestants to settle in Ulster, the northern
          province of Ireland, taking over the land from Catholic landholders.
          These settlements were known as plantations. Many of the new settlers
          came from south-west Scotland and other land was given to companies
          based in London. James later organised similar plantations in several
          other parts of Ireland. This had serious longterm consequences for the
          history of England, Scotland and Ireland.
          {'\n'}
        </Text>
        <Text style={styles.title}>The rise of Parliament</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}Elizabeth I was very skilled at managing Parliament. During her
          reign, she was successful in balancing her wishes and views against
          those of the House of Lords and those of the House of Commons, which
          was increasingly Protestant in its views.
          {'\n'}
          {'\n'}James I and his son Charles I were less skilled politically.
          Both believed in the 'Divine Right of Kings': the idea that the
          king was directly appointed by God to rule. They thought that the king
          should be able to act without having to seek approval from Parliament.
          When Charles I inherited the thrones of England, Wales, Ireland and
          Scotland, he tried to rule in line with this principle. When he could
          not get Parliament to agree with his religious and foreign policies,
          he tried to rule without Parliament at all. For 11 years, he found
          ways in which to raise money without Parliament's approval but
          eventually trouble in Scotland meant that he had to recall Parliament.
          {'\n'}
        </Text>
        <Text style={styles.title}>The beginning of the English civil war</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}Charles I wanted the worship of the Church of England to include
          more ceremony and introduced a revised Prayer Book. He tried to impose
          this Prayer Book on the Presbyterian Church in Scotland and this led
          to serious unrest. A Scottish army was formed and Charles could not
          find the money he needed for his own army without the help of
          Parliament. In 1640, he recalled Parliament to ask it for funds. Many
          in Parliament were Puritans, a group of Protestants who advocated
          strict and simple religious doctrine and worship. They did not agree
          with the king's religious views and disliked his reforms of the
          Church of England. Parliament refused to give the king the money he
          asked for, even after the Scottish army invaded England.
          {'\n'}
          {'\n'}Another rebellion began in Ireland because the Roman Catholics
          in Ireland were afraid of the growing power of the Puritans.
          Parliament took this opportunity to demand control of the English army
         , a change that would have transferred substantial power from the
          king to Parliament. In response, Charles I entered the House of
          Commons and tried to arrest five parliamentary leaders, but they had
          been warned and were not there. (No monarch has set foot in the
          Commons since.) Civil war between the king and Parliament could not
          now be avoided and began in 1642. The country split into those who
          supported the king (the Cavaliers) and those who supported Parliament
          (the Roundheads).
          {'\n'}
        </Text>
        <Text style={styles.title}>
          Oliver Cromwell and the English Republic {'\n'}
        </Text>
        <ImageCard img={'oliver'} text={'Oliver Cromwell'} />
        <Text style={styles.text}>
          {'\n'}
          The king's army was defeated at the Battles of Marston Moor and
          Naseby. By 1646, it was clear that Parliament had won the war. Charles
          was held prisoner by the parliamentary army. He was still unwilling to
          reach any agreement with Parliament and in 1649 he was executed.
          {'\n'} {'\n'}England declared itself a republic, called the
          Commonwealth. It no longer had a monarch. For a time, it was not
          totally clear how the country would be governed. For now, the army was
          in control. One of its generals, Oliver Cromwell, was sent to Ireland,
          where the revolt which had begun in 1641 still continued and where
          there was still a Royalist army. Cromwell was successful in
          establishing the authority of the English Parliament but did this with
          such violence that even today Cromwell remains a controversial figure
          in Ireland.
          {'\n'} {'\n'}The Scots had not agreed to the execution of Charles I
          and declared his son Charles II to be king. He was crowned king of
          Scotland and led a Scottish army into England. Cromwell defeated this
          army in the Battles of Dunbar and Worcester. Charles II escaped from
          Worcester, famously hiding in an oak tree on one occasion, and
          eventually fled to Europe. Parliament now controlled Scotland as well
          as England and Wales.
          {'\n'} {'\n'}After his campaign in Ireland and victory over Charles II
          at Worcester, Cromwell was recognised as the leader of the new
          republic. He was given the title of Lord Protector and ruled until his
          death in 1658. When Cromwell died, his son, Richard, became Lord
          Protector in his place but was not able to control the army or the
          government. Although Britain had been a republic for 11 years, without
          Oliver Cromwell there was no clear leader or system of government.
          Many people in the country wanted stability. People began to talk
          about the need for a king.
          {'\n'}
        </Text>
        <Text style={styles.title}>The Restoration</Text>
        <Text style={styles.text}>
          {'\n'}In May 1660, Parliament invited Charles II to come back from
          exile in the Netherlands. He was crowned King Charles II of England,
          Wales, Scotland and Ireland. Charles II made it clear that he had
          'no wish to go on his travels again'. He understood that he could
          not always do as he wished but would sometimes need to reach agreement
          with Parliament. Generally, Parliament supported his policies. The
          Church of England again became the established official Church. Both
          Roman Catholics and Puritans were kept out of power.
          {'\n'} {'\n'}During Charles II's reign, in 1665, there was a major
          outbreak of plague in London. Thousands of people died, especially in
          poorer areas. The following year, a great fire destroyed much of the
          city, including many churches and St Paul's Cathedral. London was
          rebuilt with a new St Paul's, which was designed by a famous
          architect, Sir Christopher Wren. Samuel Pepys wrote about these events
          in a diary which was later published and is still read today.
          {'\n'} {'\n'}The Habeas Corpus Act became law in 1679. This was a very
          important piece of legislation which remains relevant today. Habeas
          corpus is Latin for 'you must present the person in court'. The
          Act guaranteed that no one could be held prisoner unlawfully. Every
          prisoner has a right to a court hearing.
          {'\n'} {'\n'}Charles II was interested in science. During his reign,
          the Royal Society was formed to promote 'natural knowledge'. This
          is the oldest surviving scientific society in the world. Among its
          early members were Sir Edmund Halley, who successfully predicted the
          return of the comet now called Halley's Comet, and Sir Isaac Newton.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>Isaac Newton (1643 - 1727)</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}Born in Lincolnshire, eastern England, Isaac Newton first became
          interested in science when he studied at Cambridge University. He
          became an important figure in the field. His most famous published
          work was Philosophiae Naturalis Principia Mathematica ('Mathematical
          Principles of Natural Philosophy'), which showed how gravity applied
          to the whole universe. Newton also discovered that white light is made
          up of the colours of the rainbow. Many of his discoveries are still
          important for modern science. {'\n'}
        </Text>
        <Text style={styles.title}>A Catholic King</Text>
        <Text style={styles.text}>
          {' '}
          {'\n'}Charles II had no legitimate children. He died in 1685 and his
          brother, James, who was a Roman Catholic, became King James II in
          England, Wales and Ireland and King James VII of Scotland. James
          favoured Roman Catholics and allowed them to be army Officers, which
          an Act of Parliament had forbidden. He did not seek to reach
          agreements with Parliament and arrested some of the bishops of the
          Church of England. People in England worried that James wanted to make
          England a Catholic country once more. However, his heirs were his two
          daughters, who were both firmly Protestant, and people thought that
          this meant there would soon be a Protestant monarch again. Then,
          James's wife had a son. Suddenly, it seemed likely that the next
          monarch would not be a Protestant after all. {'\n'}
        </Text>
        <Text style={styles.title}>The Glorious Revolution</Text>
        <Text style={styles.text}>
          {'\n'}James II's elder daughter, Mary, was married to her cousin
          William of Orange, the Protestant ruler of the Netherlands. In 1688,
          important Protestants in England asked William to invade England and
          proclaim himself king. When William reached England, there was no
          resistance. James fled to France and William took over the throne,
          becoming William III in England, Wales and Ireland, and William II of
          Scotland. William ruled jointly with Mary. This event was later called
          the 'Glorious Revolution' because there was no fighting in England
          and because it guaranteed the power of Parliament, ending the threat
          of a monarch ruling on his or her own as he or she wished. James II
          wanted to regain the throne and invaded Ireland with the help of a
          French army. William defeated James II at the Battle of the Boyne in
          Ireland in 1690, an event which is still celebrated by some in
          Northern Ireland today. William re-conquered Ireland and James fled
          back to France. Many restrictions were placed on the Roman Catholic
          Church in Ireland and Irish Catholics were unable to take part in the
          government.
          {'\n'} {'\n'}There was also support for James in Scotland. An attempt
          at an armed rebellion in support of James was quickly defeated at
          Killiecrankie. All Scottish clans were required formally to accept
          William as king by taking an oath. The MacDonalds of Glencoe were late
          in taking the oath and were all killed. The memory of this massacre
          meant some Scots distrusted the new government.
          {'\n'} {'\n'}Some continued to believe that James was the rightful
          king, particularly in Scotland. Some joined him in exile in France;
          others were secret supporters. James' supporters became known as
          Jacobites.
          {'\n'}
        </Text>
        <GreenCard
          list={[
            'How and why religion changed during this period',
            'The importance of poetry and drama in the Elizabethan period',
            'About the involvement of Britain in Ireland',
            'The development of Parliament and the only period in history when England was a republic',
            'Why there was a restoration of the monarchy',
            'How the Glorious Revolution happened',
          ]}
        />
      </View>
    );
  }
}
