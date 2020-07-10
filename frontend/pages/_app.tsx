import 'tachyons/css/tachyons.min.css'
import './css/index.css'
import MainLayout from '../src/components/MainLayout'
export default ({ Component }) => (
  <MainLayout>
    <Component />
  </MainLayout>
)
