import './App.css';
import {aidar} from './asserts/person/aidar.jpg'
import {alsu} from './asserts/person/alsu.jpg'
import {danil} from './asserts/person/danil.jpg'
import {dima} from './asserts/person/dima.jpg'
import {egor} from './asserts/person/egor.jpg'
import {emir} from './asserts/person/emir.jpg'
import {ilya} from './asserts/person/ilya.jpg'
import {julia} from './asserts/person/julia.jpg'
import {kamilla} from './asserts/person/kamilla.jpg'
import {kate} from './asserts/person/kate.jpg'
import {marina} from './asserts/person/marina.jpg'
import {ruslan} from './asserts/person/ruslan.jpg'
import {rustem} from './asserts/person/rustem.jpg'
import {uvarov} from './asserts/person/uvarov.jpg'



function App() {
  return (
   <>
     <div className="header">
       <div className="header_title">
         <h1 className="header_title-text">Страничка тепла и добрых слов</h1>
       </div>
     </div>

     <div className="container">
       <div className="date">
         <h1 className="date_header">В честь дня рождения назначена встреча 3 июня</h1>
         <p className="date_text">Именниник, получивший ссылку на данный сайт, получит свой сладкий подарок в лице
           совета группы
           18И1
           и еще кое-что, о чем невозможно рассказать до 3 июня. Просим уточнить удобное для именниника время, отказы и
           возражения не
           принимаются.</p>
         <p className="date_text">
           Данный сайт поздравляет лучшего куратора и преподавателя авиационно-технического колледжа им. П.В.
           Дементьева, Сафиулину Лейсан Маратовну.
           А также предлагает Вам насладиться своим днем рождения по полной и немного понастольгировать. С днем
           рождения!
         </p>
         <p className="copyright">С любовью, совет группы 18И1❤️</p>
       </div>
     </div>


     <div className="memories container">
       <div className="memories_header">
         <h1 className="memories_title">Галерея воспоминаний</h1>
         <h2>(Чтоб не забыли)</h2>
       </div>
       <div className="grid-wrapper">
         <div>
           <img src={require("./asserts/grid/1.jpg")} alt="1"/>
         </div>
         <div>
           <img src={require("./asserts/2.jpg")} alt="2"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/3.jpg")} alt="3"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/4.jpg")} alt="4"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/5.jpg")} alt="5"/>
         </div>
         <div className="">
           <img src={require("./asserts/6.jpg")} alt="6"/>
         </div>
         <div>
           <img src={require("./asserts/7.jpg")} alt="7"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/8.jpg")} alt="8"/>
         </div>
         <div className="big">
           <img src={require("./asserts/9.jpg")} alt="9"/>
         </div>
         <div className="wide">
           <img src={require("./asserts/10.jpg")} alt="10"/>
         </div>
         <div className="wide">
           <img src={require("./asserts/11.jpg")} alt="11"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/12.jpg")} alt="12"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/13.jpg")} alt="13"/>
         </div>
         <div>
           <img src={require("./asserts/14.jpg")} alt="14"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/15.jpg")} alt="15"/>
         </div>
         <div className="tall">
           <img src={require("./asserts/16.jpg")} alt="16"/>
         </div>
         <div className="big">
           <img src={require("./asserts/17.jpg")} alt="17"/>
         </div>
         <div>
           <img src={require("./asserts/18.jpg")} alt=""/>
         </div>
         <div className="wide">
           <img src={require("./asserts/19.jpg")} alt=""/>
         </div>
         <div>
           <img src={require("./asserts/20.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/21.jpg")} alt=""/>
         </div>
         <div className="big">
           <img src={require("./asserts/22.jpg")} alt=""/>
         </div>
         <div>
           <img src={require("./asserts/23.jpg")} alt=""/>
         </div>
         <div>
           <img src={require("./asserts/24.jpg")} alt=""/>
         </div>
         <div className="big">
           <img src={require("./asserts/25.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/26.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/27.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/28.jpg")} alt=""/>
         </div>
         <div className="big">
           <img src={require("./asserts/29.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/30.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/32.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/33.jpg")} alt=""/>
         </div>
         <div className="wide">
           <img src={require("./asserts/34.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/35.jpg")} alt=""/>
         </div>
         <div className="wide">
           <img src={require("./asserts/37.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/38.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/39.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/40.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/41.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/42.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/43.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/44.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/45.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/46.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/47.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/48.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/49.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/50.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/51.jpg")} alt=""/>
         </div>
         <div className="tall">
           <img src={require("./asserts/52.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/53.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/54.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/55.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/56.jpg")} alt=""/>
         </div>
         <div className="">
           <img src={require("./asserts/57.jpg")} alt=""/>
         </div>

       </div>
     </div>


     <div className="congratulations">
       <div className="container">
         <h1 className="congratulations_title">Индивидуальные поздравления</h1>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/marina.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Фокеева Марина</h1>
             <div className="congratulations-item_text">
               <p>
                 Дорогая наша любимая Лейсан Маратовна, поздравляю Вас с днём рождения! Хочу пожелать теплых
                 воспоминаний,
                 улыбок, счастья, здоровья✨
                 Чтобы каждый день дарил яркие положительные эмоции.
                 Чтобы искорка в глазах никогда не угасала и силы только прибавлялись!
                 Чтобы в жизни все было так, как хочется именно Вам и желания исполнялись по взмаху руки😻
                 Самое главное огрооомного стального здоровья и таких же крепких нервов😌
                 Из жизни колледжа я запомнила Вас самым ярким и доброжелательным преподавателем и куратором❤️
                 Поздравляю с днём рождения! Оставайтесь всегда такой же красивой и счастливой😻✨
               </p>

             </div>
           </div>
         </div>

         <div className="congratulations-item">
           <div className="congratulations-item-info">
             <h1 className="person">Зайцев Илья</h1>
             <div className="congratulations-item_text">
               <p>
                 Лейсан Маратовна, поздравляю вас с днём рождения! Желаю вам счастья, здоровья, любви, удачи,
                 чтобы все ваши мечты сбывались! Спасибо вам за всю вашу помощь и поддержку что вы нам дали,
                 оставайтесь всегда такой же доброй, отзывчивой, искренней и просто нашим любимым куратором!
               </p>
             </div>
           </div>
           <div className="congratulations-item_img">
             <img className="img_person right" src={require('./asserts/person/ilya.jpg')} alt=""/>
           </div>
         </div>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/julia.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Сватунова Юлия</h1>
             <div className="congratulations-item_text">
               <p>
                 Дорогая Лейсан Маратовна, поздравляю вас с Днем Рождения!
                 Хочу пожелать вам крепкого здоровья, сил, терпения и как можно больше счастья и любви! Чтобы все то
                 чего вы
                 очень сильно желаете обязательно сбылось!
                 Уже прошел почти ровно год с момента выпуска, но я по-прежнему рада и благодарна, что именно вы довели
                 нас
                 до конца, всегда помогая и поддерживая нас! Даже после выпуска ❤️👉🏻👈🏻
                 Это очень ценно, спасибо Вам! Искренне любим! ❤️🤗✨
               </p>

             </div>
           </div>
         </div>


         <div className="congratulations-item">

           <div className="congratulations-item-info">
             <h1 className="person">Карпова Екатерина</h1>
             <div className="congratulations-item_text">
               <p>
                 Наша любимая Лейсан Маратовна, с днем рождения!❤️ Желаю Вам крепкого здоровья, бесконечного счастья и
                 позитива🥰
                 Пусть на вашем пути будут прекрасные коллеги, способные студенты и легкие рабочие дни!
                 Вы - тот самый лучик, который всегда освещал наш учебный путь☀️
                 Огромная благодарность Вам за поддержку, терпение, понимание и веру в нас!
               </p>
             </div>
           </div>
           <div className="congratulations-item_img">
             <img className="img_person" src={require("./asserts/person/kate.jpg")} alt=""/>
           </div>
         </div>


         <div className="congratulations-item">

           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/kamilla.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Хасанова Камилла</h1>
             <div className="congratulations-item_text">
               <p>
                 Дорогая Лейсан Маратовна, Поздравляю вас с днём рождения и хочу пожелать, чтоб вы всегда оставались
                 такой же красивой, уверенной в себе и доброй. Вы самый лучший преподаватель в моей жизни и именно на
                 ваших
                 парах мне хотелось получать знания. Спасибо вам за то, что вы есть❤️
               </p>
             </div>
           </div>

         </div>


         <div className="congratulations-item">
           <div className="congratulations-item-info">
             <h1 className="person">Динмухаметов Руслан</h1>
             <div className="congratulations-item_text">
               <p>
                 Лейсан Маратовна , С Днем Рождения 🙏🏻🤗
                 Всего самого наилучшего 🙏🏻
                 Крепкого вам здоровья 🙏🏻☺️
                 Желаю, чтобы крепки и надежны были ваши нервы, чтобы никакие жизненные трудности не могли испортить
                 ваше
                 прекрасное настроение.
                 Никогда не принимайте близко к сердцу неприятности, не грустите и не унывайте. Пускай каждый Ваш день
                 начинается с приветливых улыбок учеников.
                 Желаю вам достигнуть максимума в выбранном пути, гордости за подопечных учеников и большого личного
                 счастья😇
                 С Днем Рождения 🎊🎁🎂
               </p>
             </div>

           </div>
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/ruslan.jpg")} alt=""/>
           </div>
         </div>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/dima.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Нехаев Дмитрий</h1>
             <div className="congratulations-item_text">
               <p>
                 Поздравляю с днём рождения! Счастья, здоровья, хорошего настроения, добра, любви, процветания,
                 благополучия, желаний исполнения, финансовой обеспеченности, всего самого наилучшего в общем️
               </p>
             </div>
           </div>
         </div>

         <div className="congratulations-item">
           <div className="congratulations-item-info">
             <h1 className="person">Уваров Дмитрий</h1>
             <div className="congratulations-item_text">
               <p>
                 Уважаемая, Лейсан Маратовна!

                 Сегодня хочу поздравить Вас с Днем Рождения и выразить искреннюю благодарность за все, что Вы сделали
                 для нас.

                 Вы почти😁 всегда были готовы выслушать наши проблемы и помочь решить трудности.

                 Желаю Вам крепкого здоровья, счастья, любви и благополучия. Пусть Ваша профессиональная деятельность
                 будет успешной и приносит массу радости и удовлетворения.

                 Спасибо Вам за все! С Днем Рождения!
               </p>
             </div>
           </div>
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/uvarov.jpg")} alt=""/>
           </div>
         </div>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/rustem.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Губайдуллин Рустем</h1>
             <div className="congratulations-item_text">
               <p>
                 Дорогая Лейсан Маратовна, с праздником! Пусть ваша жизнь всегда будет яркой и радостной!
                 Желаю вам роста и развития в профессии, семейного уюта и благополучия! Пусть в работе будет меньше
                 стресса,
                 а в доме счастье! С днем рождения!
               </p>
             </div>
           </div>
         </div>


         <div className="congratulations-item">
           <div className="congratulations-item-info">
             <h1 className="person">Тухватуллин Эмир</h1>
             <div className="congratulations-item_text">
               <p>
                 Хочу поздравить лучшего куратора на свете, а зачем мне скромничать лучшего ЧЕЛОВЕКА,
                 который вкладывал уйму сил, знаний и терпений в светлое будущее своего подопечного.
                 В день вашего поздравления меня не будет рядом со всеми( "Злые дяди" с моей работы попросили
                 меня выйти на смену из-за того, что я хороший сотрудник, и все это благодаря вам❤️
                 Вы вдохнули в меня любовь к программированию чем я сейчас и занимаюсь. Вы упорно сражались за наше
                 светлое бедующее, и мы вас не подвели. Не хватит слов, чтобы описать насколько вы прекрасны,
                 с днем рождения

                 P.S. А теперь я могу обращаться по имени Лейсан?😂
               </p>
             </div>
           </div>
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/emir.jpg")} alt=""/>
           </div>
         </div>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/alsu.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Курбаналиева Алсу</h1>
             <div className="congratulations-item_text">
               <p>
                 Лейсан Маратовна, поздравляю Вас с днем рождения)
                 Этот сайт и эта работа посвящена именно Вам. Мы все очень рады, что Нашим куратором,
                 Нашим преподавателем стали именно Вы. Спасибо за всё оказанное время, за труд, за терпение,
                 поддержку. Вы - прекрасный преподаватель, куратор и наставник, который научил Нас не только базовым
                 знаниям по программе, но и смелости, умению отстаивать свое мнение, упорности, поддержке, сплоченности.
                 Этот сайт тому явное подтверждение. Пусть в жизни и бывают иногда черные полосы или неприятные события
                 -
                 помните, что Вы всегда сможете открыть эту небольшую, полную тепла и благодарности страничку и понять,
                 что все,
                 что Вы делали и делаете - не просто так. И делаете Вы это замечательно. Я очень рада, что Нам всем
                 удалось собраться
                 и сварганить такую прекрасную работу и очень сильно надеюсь, что она будет радовать Вас еще очень
                 долгое время.
                 Будьте счастливы, еще раз с днем рождения ❤❤❤
               </p>
             </div>
           </div>
         </div>

         <h1 className="congratulations_title">Поздравления сквозь километры</h1>

         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/egor.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Аксенов Егор</h1>
             <div className="congratulations-item_text">
               <p>
                 Лейсан Маратовна, поздравляю вас с днём рождения! Желаю вам счастья, исполнения желаний, успехов.
                 Хочу поблагодарить Вас за то, что вы поддерживали, помогали и отправляли меня на конкурсы. Это дало мне
                 сильный толчок и интерес к профессии, которую я долго пытался начать осваивать.
               </p>

             </div>
           </div>
         </div>

         <div className="congratulations-item">
           <div className="congratulations-item-info">
             <h1 className="person">Степанов Айдар</h1>
             <div className="congratulations-item_text">
               <p>
                 Поздравляю Вас с днем рождения. Пусть каждый день будет позитивным, добрым и
                 счастливым. Желаю Вам необъятного счастья, море тепла и улыбок. Улыбайтесь чаще. Еще раз с днем
                 рождения 🎊🎉
               </p>
             </div>

           </div>
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/aidar.jpg")} alt=""/>
           </div>

         </div>


         <div className="congratulations-item">
           <div className="congratulations-item_img">
             <img className="img_person right" src={require("./asserts/person/danil.jpg")} alt=""/>
           </div>
           <div className="congratulations-item-info">
             <h1 className="person">Конюхов Данил</h1>
             <div className="congratulations-item_text">
               <p>
                 Поздравляю Вас с днем рождения. Желаю счастья, здоровья и послушных студентов
               </p>
             </div>
           </div>
         </div>


       </div>


     </div>
   </>
  );
}

export default App;
