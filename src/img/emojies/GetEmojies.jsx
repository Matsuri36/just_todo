import EmojiList from './EmojiesList';

const GetEmojies = () => {    
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
            <EmojiList />
        </div>
    );
};

export default GetEmojies;