pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''rm -rf /www/wwwroot/fendy5.cn/dist
mv ./dist /www/wwwroot/fendy5.cn'''
      }
    }

  }
}