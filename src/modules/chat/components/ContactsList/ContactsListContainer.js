import { connect } from 'react-redux';
import ContactsList from './ContactsList';

const contactsMock = [
  {
    id: 1,
    fullName: 'Svitlana Ternopolska',
  },
  {
    id: 2,
    fullName: 'Nasha Tonkoshkurova',
  },
  {
    id: 3,
    fullName: 'Tetiana Martynova',
  },
  {
    id: 4,
    fullName: 'Valik',
  }
];

const mapStateToProps = state => ({
  contacts: contactsMock,
});

export default connect(mapStateToProps)(ContactsList);
