<cfcomponent>
<cffunction name="insert">
	<cfargument name="pumpDate" default="#now()#">	
	<cfargument name="pumpTime" default="#now()#">	
	<cfargument name="pumpUnit" default="mL">	
	<cfargument name="leftSide" default="0">
	<cfargument name="rightSide" default="0">
	<cfargument name="storageLocation" default="freezer bag">

	<cfset var.pumpTotal = arguments.leftSide + arguments.rightSide>

	<cfquery name="insertRecord" datasource="chestera_main">
		INSERT INTO pumpRecord (
			pumpID,
			pumpDate,
			pumpTime,
			pumpTotal,
			pumpUnit,
			leftSide,
			rightSide,
			storageLocation			
		)
		VALUES (
			pumpRecord_seq.nextVal,
			'#ARGUMENTS.PUMPDATE#',
			'#ARGUMENTS.PUMPTIME#',
			#VAR.PUMPTOTAL#,
			'#ARGUMENTS.PUMPUNIT#',
			#ARGUMENTS.LEFTSIDE#,
			#ARGUMENTS.RIGHTSIDE#,
			'#ARGUMENTS.STORAGELOCATION#'
		)
	</cfquery>
</cffunction>

<cffunction name="update">
	<cfargument name="pumpID" default="" required="true"> 
	<cfargument name="pumpDate" default="#now()#">	
	<cfargument name="pumpTime" default="#now()#">	
	<cfargument name="pumpTotal" default="0">	
	<cfargument name="pumpUnit" default="mL">	
	<cfargument name="leftSide" default="0">
	<cfargument name="rightSide" default="0">
	<cfargument name="storageLocation" default="freezer bag">
	
	<cfquery name="updateRecord" datasource="chestera_main">
		UPDATE pumpRecord
		SET 
			pumpDate = '#ARGUMENTS.PUMPDATE#',
			pumpTime = '#ARGUMENTS.PUMPTIME#',
			pumpTotal = #ARGUMENTS.PUMPTOTAL#,
			pumpUnit = '#ARGUMENTS.PUMPUNIT#',
			leftSide = #ARGUMENTS.LEFTSIDE#,
			rightSide = #ARGUMENTS.RIGHTSIDE#,
			storageLocation = '#ARGUMENTS.STORAGELOCATION#'
		WHERE 0=0
		AND pumpID = #ARGUMENTS.PUMPID#
	</cfquery>
</cffunction>

<cffunction name="delete">
	<cfargument name="pumpID" default="" required="true"> 

	<cfquery name="deleteRecord" datasource="chestera_main">
		DELETE pumpRecord
		WHERE 0=0
		AND pumpID = #ARGUMENTS.PUMPID#
	</cfquery>
	
</cffunction>

</cfcomponent>