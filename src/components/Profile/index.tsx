import * as S from 'components/Profile/styles'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

export const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <S.ProfileContainer>
      <img src="https://www.amigoni.com.br/images/amigoni.png" alt="Usuário" />
      <div>
        <strong>Paulo Henrique Amigoni</strong>
        <span>
          <S.Arrow />
          Level {level}
        </span>
      </div>
    </S.ProfileContainer>
  )
}
