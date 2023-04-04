import { useSelector } from 'react-redux';
import { cancelFetch, fetchMData } from '../services/fetch-characters.fetch';
import Section from './Section';
import Loading from './Loading';
import ImageSection from './ImageSection';
import { ReduxState } from '../models';

const GetCharacter = () => {
  const { character } = useSelector((state: ReduxState) => state.character);
  const { loading } = useSelector((state: ReduxState) => state.character);
  const randomNumber = (maxN: number): number => {
    const rm = Math.round(Math.random() * maxN);
    return rm;
  };
  return (
    <Section>
      <div className="displayed_data">
        <div className="displayed_data-data">
          <div className="displayed_data-buttons">
            <button
              style={{ background: '#416230' }}
              onClick={() => fetchMData(randomNumber(826))}
            >
              Buscar
            </button>
            <button
              style={{ background: '#ffaa00' }}
              onClick={cancelFetch}
              disabled={loading ? false : true}
            >
              CANCELAR FETCH
            </button>
          </div>
        </div>
        <div className="displayed_data-image">
          {loading ? (
            <div className="isLoading">
              <Loading />
              <div className="isLoading-image">
                <ImageSection
                  title={character?.name || ''}
                  subtitle={character?.gender || ''}
                  image={
                    character?.image ||
                    'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
                  }
                />
              </div>
            </div>
          ) : (
            <ImageSection
              title={character?.name || ''}
              subtitle={character?.gender || ''}
              image={
                character?.image ||
                'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
              }
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default GetCharacter;
