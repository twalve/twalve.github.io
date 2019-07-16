m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

Sub setMilestone(milestone)
    video = "videoMilestone" + milestone
    key = "video" + milestone
    trackEventAdobe(video, asset)
    m[key] = True

End Sub

If Not m.video95 Then
    If percentage >= 95 Then
        setMilestone("95")
    Else If Not m.video75 Then
        If percentage >= 75 Then
            setMilestone("75")
        Else If Not m.video50 Then
            If percentage >= 50 Then
                setMilestone("50")
            Else If Not m.video25 Then
                If percentage >= 25 Then
                    setMilestone("25")
                End If
            End If
        End If
    End If
End If

———————————————————————————————————————————————————————————————————————————————

m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

Sub setMilestone(milestone)
    video = "videoMilestone" + milestone
    key = "video" + milestone
    trackEventAdobe(video, asset)
    m[key] = True

End Sub

If Not m.video95 Then
    If percentage >= 95 Then
        setMilestone("95")
    Else
        If Not m.video75 Then
            If percentage >= 75 Then
                setMilestone("75")
            Else
                If Not m.video50 Then
                    If percentage >= 50 Then
                        setMilestone("50")
                    Else 
                        If Not m.video25 Then
                            If percentage >= 25 Then
                                setMilestone("25")
                            End If
                        End If
                    End If
                End If
            End If
        End If
    End If
End If

———————————————————————————————————————————————————————————————————————————————

m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

If Not m.video95 And percentage >= 95 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video95 = True
Else If Not m.video75 And percentage < 95 And percentage >= 75 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video75 = True
Else If Not m.video50 And percentage < 75 And percentage >= 50 Then
    trackEventAdobe("videoMilestone50", asset)
    m.video50 = True
Else If Not m.video25 And percentage < 50 And percentage >= 25 Then
    trackEventAdobe("videoMilestone25", asset)
    m.video25 = True
End If

———————————————————————————————————————————————————————————————————————————————

m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

If Not m.video25 And percentage < 50 And percentage >= 25 Then
    trackEventAdobe("videoMilestone25", asset)
    m.video25 = True
Else If Not m.video50 And percentage < 75 And percentage >= 50 Then
    trackEventAdobe("videoMilestone50", asset)
    m.video50 = True
Else If Not m.video75 And percentage < 95 And percentage >= 75 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video75 = True
Else If Not m.video95 And percentage >= 95 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video95 = True
End If

———————————————————————————————————————————————————————————————————————————————


m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

If Not m.video25 And percentage >= 25 And percentage < 50 Then
    trackEventAdobe("videoMilestone25", asset)
    m.video25 = True
Else If Not m.video50 And percentage >= 50 And percentage < 75 Then
    trackEventAdobe("videoMilestone50", asset)
    m.video50 = True
Else If Not m.video75 And percentage >= 75 And percentage < 95 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video75 = True
Else If Not m.video95 And percentage >= 95 Then
    trackEventAdobe("videoMilestone75", asset)
    m.video95 = True
End If

———————————————————————————————————————————————————————————————————————————————

m.video0 = False 
m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

If percentage >= 25 And percentage < 50 Then
    If Not m.video0 Then
        trackEventAdobe("videoMilestone25", asset)
        m.video25 = True
    End If
Else If percentage >= 50 And percentage < 75 Then
    If Not m.video50 Then
        trackEventAdobe("videoMilestone50", asset)
        m.video50 = True
    End If
Else If percentage >= 75 And percentage < 95 Then
    If Not m.video75 Then
        trackEventAdobe("videoMilestone75", asset)
        m.video75 = True
    End If
Else If percentage >= 95 Then
    If Not m.video95 Then
        trackEventAdobe("videoMilestone75", asset)
        m.video95 = True
    End If
End If

———————————————————————————————————————————————————————————————————————————————

m.video25 = False 
m.video50 = False 
m.video75 = False 
m.video95 = False 

If percentage >= 25 And percentage < 50 Then
    If Not (m.video25 Or m.video50 Or m.video75 Or m.video95) Then
        trackEventAdobe("videoMilestone25", asset)
        m.video25 = True
    End If
Else If percentage >= 50 And percentage < 75 And Not m.video50 Then
    If Not (m.video50 Or m.video75 Or m.video95) Then
        trackEventAdobe("videoMilestone50", asset)
        m.video50 = True
    End If
Else If percentage >= 75 And percentage < 95 And Not m.video75 Then
    If Not (m.video75 Or m.video95) Then
        trackEventAdobe("videoMilestone75", asset)
        m.video75 = True
    End If
Else If percentage >= 95 And Not m.video95 Then
    If Not m.video95 Then
        trackEventAdobe("videoMilestone95", asset)
        m.video95 = True
    End If
End If