import React, { useRef } from "react";
import { Svg, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useFrame, useThree } from "@react-three/fiber";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export const Bag = () => {
	const ref = useRef();
    const { nodes, materials } = useGLTF("./models/leatherbag.glb");
	const { bagView, bodyColor, strapColor, logoColor, stictchesColor } = useSelector(state => state.bagSlice);

	useFrame((state, delta)=>{
		ref.current.rotation.y -= delta * 0.1;
	})

	  
  return (
	<>
		<group dispose={null} ref={ref}>
			<mesh
				name="open_bag_interior"
				castShadow
				receiveShadow
				geometry={nodes.open_bag_interior.geometry}
				material={materials.open_bag_interior_mtl}
				visible={bagView !== 'closed'}
			/>
			<mesh
				name="top_handle"
				castShadow
				receiveShadow
				geometry={nodes.top_handle.geometry}
				material={materials.bag_body_mtl}  
				material-color={bodyColor.color} 
			/>
			<mesh
				name="arm_strap_and_middle_band"
				castShadow
				receiveShadow
				geometry={nodes.arm_strap_and_middle_band.geometry}
				material={materials.straps_band_mtl}
				material-color={strapColor.color}
			/>
			<mesh
				name="open_bag_back_strap"
				castShadow
				receiveShadow
				geometry={nodes.open_bag_back_strap.geometry}
				material={materials.straps_band_mtl}
				visible={bagView !== 'closed'}
			/>
			<mesh
				name="closed_bag_back_strap"
				castShadow
				receiveShadow
				geometry={nodes.closed_bag_back_strap.geometry}
				material={materials.straps_band_mtl}
				visible={bagView === 'closed'}
			/>
			<mesh
				name="bag_body_common"
				castShadow
				receiveShadow
				geometry={nodes.bag_body_common.geometry}
				material={materials.bag_body_mtl}
				material-color={bodyColor.color}
			/>
			<mesh
				name="closed_bag_body"
				castShadow
				receiveShadow
				geometry={nodes.closed_bag_body.geometry}
				material={materials.bag_body_mtl}
				visible={bagView === 'closed'}
			/>
			<mesh
				name="open_bag_body"
				castShadow
				receiveShadow
				geometry={nodes.open_bag_body.geometry}
				material={materials.bag_body_mtl}
				visible={bagView !== 'closed'}
			/>
			<mesh
				name="open_bag_hardware"
				castShadow
				receiveShadow
				geometry={nodes.open_bag_hardware.geometry}
				material={materials.hardware_mtl}
				visible={bagView !== 'closed'}
			/>
			<mesh
				name="closed_bag_hardware"
				castShadow
				receiveShadow
				geometry={nodes.closed_bag_hardware.geometry}
				material={materials.hardware_mtl}
				visible={bagView === 'closed'}
			/>
			<mesh
				name="hardware_common"
				castShadow
				receiveShadow
				geometry={nodes.hardware_common.geometry}
				material={materials.hardware_mtl}
			/>
			<mesh
				name="logo"
				castShadow
				receiveShadow
				geometry={nodes.logo.geometry}
				material={materials.hardware_mtl} 
				material-color={logoColor.color}
			/>
			<mesh
				name="close_bag_stitches"
				castShadow
				receiveShadow
				geometry={nodes.close_bag_stitches.geometry}
				material={materials.stitches_mtl}
				visible={bagView === 'closed'}
			/>
			<mesh
				name="stitches_common"
				castShadow
				receiveShadow
				geometry={nodes.stitches_common.geometry}
				material={materials.stitches_mtl} 
				material-color={stictchesColor.color}
			/>
			<mesh
				name="open_bag_stitches"
				castShadow
				receiveShadow
				geometry={nodes.open_bag_stitches.geometry}
				material={materials.stitches_mtl}
				visible={bagView !== 'closed'}
			/>
	</group>
  </>
  )
}

useGLTF.preload("./models/leatherbag.glb");