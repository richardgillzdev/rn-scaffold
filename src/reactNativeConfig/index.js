import { copyBuildConfiguration } from './xcodeProject'

export default () => {
  console.log('Adding React Native Config')

  copyBuildConfiguration('ios/Test.xcodeproj/project.pbxproj', 'Release', 'Staging')
}
