import React from 'react'
import main_img from "../images/main.jpg"
import sec1_img from  "../images/main1.jpg"
import sec_img from "../images/sec.jpg"
import sec2_img from  "../images/sec2.jpg"
import sec3_img from  "../images/sec3.jpg"
import con_1 from "../documents/con_1.jpg"
import con_2 from "../documents/con_2.jpg"
import dip_1 from "../documents/dip_1.jpg"
import dip_2 from "../documents/dip_2.jpg"

import '../css/mat.css'


const Matriculant = () => {
    return (

        <div className = "Container">
                <h1>Абитуриент</h1>
                <h2>Универсальное образование для современной жизни.</h2>
                <img className="mat-main_img" src={main_img} alt="main_img" />
            <div className="flex">
            <div className = "mat-block1">НАСТАВЛЕНИЕ БУДУЩИМ СТУДЕНТАМ</div>

           <p className="mat-p">ВАМ, НОВОМУ И МОЛОДОМУ ПОКОЛЕНИЮ, УВАЖАЕМЫЕ АБИТУРЕНТЫ, предстоит благородная и ответственная миссия — создание нового метода и стиля управления государством. И таких специалистов готовит КЫРГЫЗСКО-РОССИЙСКАЯ АКАДЕМИЯ ОБРАЗОВАНИЯ, где работают ведущие специалисты и ученые Кыргызской Республики в этой области знаний.

               Осуществление образовательного процесса обеспечивается ведущими учеными и преподавателями республики, для качественной работы КЫРГЫЗСКО-РОССИЙСКОЙ АКАДЕМИИ ОБРАЗОВАНИЯ создан богатый библиотечный фонд. Студентам и преподавателям предлагается широкий, постоянно обновляющийся фонд специальной литературы. Приобретенное направление в работе библиотеки: качественное комплектование фонда; информационное обеспечение образовательного процесса и научных исследований; использование компьютерных технологий для удовлетворения информационных потребностей пользователей. Функционирует читальный зал.

               Приоритетным направлением в воспитательной работе является приобщение молодежи к творческой деятельности. В академии ежегодно проводяться традиционные праздники «Посвящение в студенты», «Вечера отдыха», встречи с интересными людьми и другие развлекательные мероприятия организованные студентами. Создан клуб «КВН».
           </p>
            </div>

                <div className="flex">
                        <img className="sec_img" src={sec_img} alt="img" />

                    <div className="gr-info1" >
                        <div className= "gr-info">КЫРГЫЗСКО-РОССИЙСКАЯ АКАДЕМИЯ ОБРАЗОВАНИЯ организует подготовку кадров по направлениям:
                        </div >
                        <li >531100 Лингвистика</li>
                        <li >530300 Психология</li>
                        <li >550700 Педагогика и психология</li>
                        <li >550700 Педагогика и методика начального образования</li>
                        <li >530500 Юриспруденция</li>
                        <li >580990 Государственное и муниципальное управление</li>
                        <li >580100 Финансы и кредит</li>
                        <li >710100 Информатика и вычислительная техника</li>
                    </div>
                </div>
            <div className="flex">
                    <div className="gr-info3">Абитуриенты, успешно прошедшие общее республиканское тестирование (ОРТ), зачисляются по результатам тестирования на основе конкурсного балла. Абитуриенты из других стран зачисляются по результатам комплексного тестирования КРАО.
                        <div className="gr-info2">
                            <h5>Формы обучения:</h5>
                            <li>Очное обучение – 4 года</li>
                            <li>Очно-вечернее обучение – 5 лет</li>
                        </div>
                    </div>
                <img className="sec1_img" src={sec1_img} alt="img1" />
            </div>
            <div className="flex">
                <img className="sec2_img" src={sec2_img} alt="img2" />
            <div className="gr-info4">
               <h5>Комплексное тестирование:</h5>

               <li >История Кыргызстана</li>
               <li >Биология</li>
               <li >Математика</li>
               <h5 >Общие дисциплины:</h5>
               <li >Русский (кыргызский) язык</li>
               <li >Иностранный язык</li>
            </div>
            </div>
            <div className="flex">
                   <div className="gr-info5">
                       <h5> Перечень документов:</h5>
                       <li>Заявление</li>
                       <li>Сертификат (ОРТ)</li>
                       <li>Аттестат о среднем образовании / диплом</li>
                       <li>Медицинская справка формы 086-у</li>
                       <li>Фотографии 3х4 – 6 штук</li>
                       <li>Паспорт (копия)</li>
                       <li>Военный билет (копия)</li>
                   </div>
                <img className="sec3_img" src={sec3_img} alt="img3" />
            </div>

            Прейскурант цен на платные образовательные услуги Кыргызско-Российской академии образования для студентов поступающих на 2020-2021 учебный год.:
            очно-вечерняя и  заочная формы обучения бакалавриат ( на базе среднего образования, 5 лет, на базе общего среднего образования).
            <table >
                <tr>
                    <th>№</th>
                    <th>Направление</th>
                    <th>Шифр</th>
                    <th>Специальность</th>
                    <th>Граждане КР</th>
                    <th>Иностранные граждане</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Экономика</td>
                    <td>580100</td>
                    <td>Финансы и кредит</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Менеджмент</td>
                    <td>580200</td>
                    <td>Менеджер</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Менеджмент</td>
                    <td>580200</td>
                    <td>Менеджер</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Педагогика</td>
                    <td>550700</td>
                    <td>Педагогика и методика начального образования</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Юриспруденция</td>
                    <td>530500</td>
                    <td>Юриспруденция</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>580900</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Информатика и вычислительная техника</td>
                    <td>710100</td>
                    <td>Автоматизированные системы обработки информации и управления</td>
                    <td>21500</td>
                    <td>25500</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td colSpan="3">Ликвидация разницы и восстановление</td>
                    <td colSpan="2">Определяется индивидуально расчетным путем</td>

                </tr>
                <tr>
                    <td>9</td>
                    <td colSpan="3">Право записи</td>
                    <td colSpan="2">300</td>

                </tr>
            </table>
            Очная форма обучения бакалавриат ( на базе среднего и среднего профессионального образования, 4 года, <strong>1-2 курс</strong>)
            <table>
                <tr>
                    <th>№</th>
                    <th>Направление</th>
                    <th>Шифр</th>
                    <th>Специальность</th>
                    <th>Граждане КР</th>
                    <th>Иностранные граждане</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Экономика</td>
                    <td>580100</td>
                    <td>Финансы и кредит</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Психология</td>
                    <td>530300</td>
                    <td>Психология</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Педагогика</td>
                    <td>550700</td>
                    <td>Педагогика и психология,
                        Педагогика и методика начального образования</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Логистика</td>
                    <td>580200</td>
                    <td>Логист</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Лингвистика</td>
                    <td>531100</td>
                    <td>Лингвист</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Юриспруденция</td>
                    <td>530500</td>
                    <td>Юрист</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>580900</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>580900</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>580900</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>27000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td colSpan="3">Ликвидация разницы и восстановление</td>
                    <td colSpan="2">Определяется индивидуально расчетным путем</td>

                </tr>
                <tr>
                    <td>11</td>
                    <td colSpan="3">Право записи</td>
                    <td colSpan="2">300</td>

                </tr>
            </table>
            Очно-вечерняя и заочная формы обучения и бакалавриат  ( на базе среднего профессионального образования и высшего образования, 5 лет, <strong>2 курс</strong>)
            <table>
                <tr>
                    <th>№</th>
                    <th>Направление</th>
                    <th>Шифр</th>
                    <th>Специальность</th>
                    <th>Граждане КР</th>
                    <th>Иностранные граждане</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Экономика</td>
                    <td>580100</td>
                    <td>Финансы и кредит</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Менеджмент</td>
                    <td>580200</td>
                    <td>Менеджер</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Психология</td>
                    <td>530300</td>
                    <td>Педагогика и психология</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Педагогика</td>
                    <td>550700</td>
                    <td>Педагогика и методика начального образования</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Юриспруденция</td>
                    <td>530500</td>
                    <td>Юриспруденция</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>580900</td>
                    <td>Государственное и муниципальное управление</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Информатика и вычислительная техника</td>
                    <td>710100</td>
                    <td>Автоматизированные системы обработки информации и управления</td>
                    <td>24500</td>
                    <td>27000</td>
                </tr>

                <tr>
                    <td>8</td>
                    <td colSpan="3">Ликвидация разницы и восстановление</td>
                    <td colSpan="2">Определяется индивидуально расчетным путем</td>

                </tr>
                <tr>
                    <td>9</td>
                    <td colSpan="3">Право записи</td>
                    <td colSpan="2">300</td>

                </tr>
            </table>
                Очная форма обучения магистратура ( 2 года, <strong>I, II курс</strong>)

            <table>
                <tr>
                    <th>№</th>
                    <th>Направление</th>
                    <th>Шифр</th>
                    <th>Специальность</th>
                    <th>Граждане КР</th>
                    <th>Иностранные граждане</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Информатика и вычислительная техника (Магистратура)</td>
                    <td>580100</td>
                    <td>Автоматизированные системы обработки информации и управления</td>
                    <td>29500</td>
                    <td>40500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Психология (Магистратура)</td>
                    <td>530300</td>
                    <td>Психология</td>
                    <td>29500</td>
                    <td>40500</td>
                </tr>
            </table>
            Прейскурант цен на платные образовательные услуги для студентов, поступающих в колледж КРАО в 2020-2021 учебный год(<strong>I курс</strong>
            <table>
                <tr>
                    <th>№</th>
                    <th>Направление</th>
                    <th>Шифр</th>
                    <th>Специальность</th>
                    <th>Граждане КР</th>
                    <th>Иностранные граждане</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Экономика и бухгалтерский учет</td>
                    <td>080110</td>
                    <td>Бухгалтер</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Социальная педагогика</td>
                    <td>050711</td>
                    <td>Педагог</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Дошкольное образование</td>
                    <td>050704</td>
                    <td>Воспитатель</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Преподавание в начальных классах</td>
                    <td>050709</td>
                    <td>Учитель нач.кл., воспитатель</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Менеджмент</td>
                    <td>080501</td>
                    <td>Менеджер</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Туризм</td>
                    <td>100201</td>
                    <td>Организатор туризма</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Правоведение</td>
                    <td>030503</td>
                    <td>Юрист</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Право и организация социального обеспечения</td>
                    <td>030504</td>
                    <td>Юрист</td>
                    <td>20000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td> Техническое обслуживание средств ВТ и КС</td>
                    <td>230110</td>
                    <td>Техник</td>
                    <td>22000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td> Программное обеспечение ВТ и АС</td>
                    <td>230109</td>
                    <td>Техник-программист</td>
                    <td>22000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td> Банковское дело</td>
                    <td>080108</td>
                    <td>специалист банковского дела</td>
                    <td>22000</td>
                    <td>23000</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td colSpan="3">Ликвидация разницы и восстановление</td>
                    <td colSpan="2">Определяется индивидуально расчетным путем</td>

                </tr>
                <tr>
                    <td>13</td>
                    <td colSpan="3">Право записи</td>
                    <td colSpan="2">300</td>

                </tr>
            </table>
            Договор о Условиях и порядке обучения в Кыргызско-Российской академии образования
            <img className="cont_img_1" src={con_1} alt="contract_1.img" />
            <img className="cont_img_2" src={con_2} alt="contract_2.img" />
            <h3>Образец Диплома</h3>
            <img className="dip_img_1" src={dip_1} alt="diploma_1.img" />
            <img className="dip_img_2" src={dip_2} alt="diploma_2.img" />
        </div>
    )

}

export default Matriculant;