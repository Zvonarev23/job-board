import styles from "./Filter.module.css";

import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useAppSelector } from "../../hooks/useSelector";
import { fetchCountries } from "../../store/countriesSlice/countriesSlice";

type FilterType = {
  isOpenFilter: boolean;
};

export const Filter = ({ isOpenFilter }: FilterType) => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <section
      className={isOpenFilter ? styles.wrapper : styles.wrapper__mobile_hide}
    >
      <h2 className={styles.title}>Фильтр</h2>

      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Город</legend>

          <div className={styles.select_wrapper}>
            <select className={styles.select} name="city">
              <option className={styles.option} value="">
                Выбрать город
              </option>
              {countries.map((country, i) => {
                return (
                  <option key={i} className={styles.option} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Заработная плата</legend>

          <div className={styles.range}>
            <input
              className={styles.input}
              type="number"
              name="pay-from"
              placeholder="от"
            />

            <input
              className={styles.input}
              type="number"
              name="pay-to"
              placeholder="до"
            />
          </div>
        </fieldset>

        <div className={styles.checkboxes}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Формат</legend>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="format"
                value="Офис"
              />
              Офис
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="format"
                value="Удаленный"
              />
              Удаленный
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="format"
                value="Гибкий"
              />
              Гибкий
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Опыт работы</legend>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="experience"
                value="Опыт не важен"
              />
              Опыт не важен
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="experience"
                value="Без опыта"
              />
              Без опыта
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="experience"
                value="От 1 года до 3-х лет"
              />
              От 1 года до 3-х лет
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="experience"
                value="От 3-х лет"
              />
              От 3-х лет
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Занятость</legend>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="type"
                value="Полная занятость"
              />
              Полная занятость
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="type"
                value="Частичная занятость"
              />
              Частичная занятость
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="type"
                value="Стажировка"
              />
              Стажировка
            </label>

            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="type"
                value="Проектная работа"
              />
              Проектная работа
            </label>
          </fieldset>
        </div>

        <div className={styles.buttons}>
          <button className={styles.submit} type="submit">
            Применить
          </button>

          <button className={styles.reset} type="reset">
            Очистить
          </button>
        </div>
      </form>
    </section>
  );
};
