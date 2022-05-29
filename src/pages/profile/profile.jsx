import React, { useState, useEffect, useContext } from 'react'
import { Avatar } from 'antd'
import { EditFilled } from '@ant-design/icons'
import { ReactReduxContext } from 'react-redux'
import { getProfile, getAvatar } from '../../api/profile'

const Profile = () => {
  const [avatarUser, setAvatarUser] = useState('')
  const [nameUser, setNameUser] = useState('')
  const [chatWorkIdUser, setChatWorkIdUser] = useState('')
  const [emailUser, setEmailUser] = useState('')

  const { store } = useContext(ReactReduxContext)

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(store.getState().get('auth').get('user'))
    if (user) {
      const id = user.get('id')
      getProfile(id).then((response) => {
        setNameUser(response.data.name)
        setChatWorkIdUser(response.data.chatwork_id)
        setEmailUser(response.data.email)
      })
      getAvatar(id).then(() => {
        const link = `api/avatar/${id}`
        setAvatarUser(link)
      })
    }
  }, [user])
  return(
    <div>
          <h1 className="title">
            Profile
          </h1>
          <div className="grid grid-cols-12 grid-rows-1 gap-2">
            <div className="row-span-1 col-span-3 justify-self-end">
              <Avatar
                size={150}
                style={{
                  backgroundColor: '#FFD802',
                  lineHeight: '100px',
                  marginRight: '60px',
                }}
                src={avatarUser}
              />
            </div>
            <div className="h-80 col-span-6 border-2 border-gray-300">
              <div className="grid grid-cols-3">
                <div className="col-start-3 pt-4 justify-self-center">
                  <div className="flex items-center gap-4 ">
                    <div>
                      <EditFilled className="border-2 rounded-full py-1 px-1 border-black" />
                    </div>
                    <a href="profile/edit" className="text-blue-500">
                      Edit profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-x-4 gap-y-10 text-lg pt-10">
                <div className="col-span-3 justify-self-end">
                  <p style={{ margin: 0 }}>username: </p>
                </div>
                <div className="col-span-9">
                  <p style={{ margin: 0 }}>{nameUser}</p>
                </div>

                <div className="col-span-3 justify-self-end">
                  <p style={{ margin: 0 }}>ID: </p>
                </div>
                <div className="col-span-9">
                  <p style={{ margin: 0 }}>{chatWorkIdUser}</p>
                </div>

                <div className="col-span-3 justify-self-end">
                  <p style={{ margin: 0 }}>Email: </p>
                </div>
                <div className="col-span-9">
                  <p style={{ margin: 0 }}>{emailUser}</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
export default Profile
