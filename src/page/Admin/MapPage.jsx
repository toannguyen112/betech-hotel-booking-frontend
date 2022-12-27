
import React from 'react'
import Map from '../../components/Map';
import Authenticated from '../../Layout/Authenticated'

function MapPage() {

  return (
    <Authenticated>
      <section>
        <div className="font-bold text-[32px] py-[32px]">
          <Map />
        </div>
      </section>
    </Authenticated>
  )
}

export default MapPage